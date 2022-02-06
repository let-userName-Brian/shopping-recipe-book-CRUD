import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.scss']
})
export class RecipeMainComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  } 
}
