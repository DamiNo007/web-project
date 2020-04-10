import { Component, OnInit, Input} from '@angular/core';
import {Game} from '../game'
import {GameService} from '../game.service'
import {GameDetailsService} from '../game-details.service'
import{CategoryService} from '../category.service'
import { Category } from '../category';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-shooters',
  templateUrl: './shooters.component.html',
  styleUrls: ['./shooters.component.css']
})

export class ShootersComponent implements OnInit {

  games:Game[];
  topGames:Game[];
  categories:Category[];
  anythingFound:boolean=false



  @Input() searchName:String;

  searchGames$:Observable<Game[]>;
  private searchTerms = new Subject<string>();

  constructor(private gameService:GameService, private gameDetService:GameDetailsService, private catService: CategoryService) { }

  search(term:string):void{
    this.searchTerms.next(term)
  }

  searchGame(term:string):void{
    this.searchTerms.next(term)

  }

  ngOnInit(): void {
    this.getGames()
    this.getTopGames()
    this.getCategories();
    this.searchGames$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gameService.searchGames(term)),
    );
  }

  onSelect(game:Game):void{
    this.gameDetService.initializeGame(game)
  }
  getGames():void{
    this.gameService.getGames("shooters")
      .subscribe(games=>this.games = games)
  }

  getCategories():void{
    this.catService.getCategories()
      .subscribe(categories => this.categories=categories)
  }


  getTopGames(){
    this.gameService.getGames("shooters")
      .subscribe(topGames => this.topGames = topGames.slice(0, 10));
  }

}
