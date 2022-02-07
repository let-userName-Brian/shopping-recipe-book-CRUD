import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-main',
  templateUrl: './recipe-main.component.html',
  styleUrls: ['./recipe-main.component.scss'],
  providers: [RecipeService]
})
export class RecipeMainComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  } 
}
