import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart-service.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  foodId!: number;

  food: Food;
  constructor(private foodService: FoodService, private cartService: CartService, private route: ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params => {
      if (params.foodId) {
        this.foodId = params.foodId;
      }
    })
    this.food = foodService.getFoodById(this.foodId);

  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page")
  }

}
