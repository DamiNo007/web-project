import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service' 
import {GameDetailsService} from '../game-details.service'
import {Game} from '../game'
import {Cart} from '../cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartElems:Cart[] 
  totalPrice: number




  constructor(private cartService:CartService, private gameDetService:GameDetailsService) { 
  }

  ngOnInit(): void {
    this.getCartElems()
    this.getTotalPrice()
  }




  removeFromCart(cartElem:Cart){
    this.cartService.removeFromCart(cartElem).subscribe();
    this.cartElems = this.cartElems.filter(c => c !== cartElem);
    this.getTotalPrice()
  }

  getTotalPrice(){
    this.totalPrice=this.cartService.getTotalPrice()
  }
  getCartElems():void{
    this.cartService.getCartElems()
      .subscribe(cartElems=>this.cartElems = cartElems)
  }

  
  onSelect(game:Game):void{
    this.gameDetService.initializeGame(game)
  }

}
