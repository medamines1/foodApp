import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart-service.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService:CartService,private foodService:FoodService) { 

    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[2]);
    cartService.addToCart(foods[3]);
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInStr:string){
    const quantity = parseInt(quantityInStr);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }


  ngOnInit(): void {
  }

}
