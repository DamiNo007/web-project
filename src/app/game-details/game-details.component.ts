import { Component, OnInit, Input } from '@angular/core';
import {GameDetailsService} from '../game-details.service'
import {CartService} from '../cart.service'
import{HttpClient} from '@angular/common/http'
import { DomSanitizer } from '@angular/platform-browser';
import {Game} from '../game'
import { Location } from '@angular/common';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  private postURL = 'api/cart'
  safeURL
  game:Game
  path:String
  

  @Input() changedName:String
  constructor(private location: Location,private cartService:CartService, private _sanitizer: DomSanitizer, private gameDetService: GameDetailsService) { 
  }


  share(productName) {
    window.alert('The ' + productName +' has been added to the Cart!');
  }


  goBack(): void {
    this.location.back();
  }

  saveChanges():void{
    this.gameDetService.updateGame(this.game).subscribe(()=>this.goBack());
  }

  addToCart(game:Game){
    this.cartService.addToCart(game)
  }

  ngOnInit(): void {  
    this.game = this.gameDetService.returnGame()
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.game.video_path);
  }  
}


