import { Component, OnInit } from '@angular/core';
import{Game} from '../game'
import{GameService} from '../game.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.gameService.getGames("action")
      .subscribe(games => this.games = games.slice(1, 5));
  }

}
