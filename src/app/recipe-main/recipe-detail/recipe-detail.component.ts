import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelOpenState = false;
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) { }


  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    console.log('edit recipe');
  }

  onDeleteRecipe() {
    console.log('delete recipe');
  }
  
  ngOnInit(): void {
  }

}
