import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];

  @Input()
  foodPageTags?: string[];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {

    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTag();
    }
  }

}
