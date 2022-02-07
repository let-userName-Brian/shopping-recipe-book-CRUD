import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingSerivce } from './shopping.service';

@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.scss'],
})
export class ShoppingMainComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingSerivce) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients()
    this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
