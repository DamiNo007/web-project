import { Injectable } from '@angular/core';
import {Game} from './game';
import {Cart} from './cart';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InMemoryDataService } from './in-memory-data.service';
import { createElementCssSelector } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
  
})



export class CartService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  cart:Cart
  carts:Cart[]

  totalPrice:number=0;

  private cartUrl = "api/cart"
  constructor(private http:HttpClient) { }

  addToCart(product:Game){
    this.totalPrice = this.totalPrice+product.price
    this.cart = {
      id:null,
      product:product
    }
    return this.http.post(this.cartUrl,this.cart).toPromise()
  }



  getTotalPrice():number{
    return this.totalPrice
  }

  genId():number{
    this.getCartElems()
    .subscribe(carts=>this.carts = carts)
  
    return this.carts.length > 0 ? Math.max(...this.carts.map(cart => cart.id)) + 1 : 1;
  }



  removeFromCart(cartElem:Cart){
    this.totalPrice = this.totalPrice-cartElem.product.price
    const id = typeof cartElem === 'number'? cartElem : cartElem.id;
    const url = `${this.cartUrl}/${id}`;

    return this.http.delete<Cart>(url, this.httpOptions)
  }

  getCartElems(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.cartUrl);
  }
}
