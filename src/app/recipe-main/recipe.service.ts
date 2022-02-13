import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingSerivce } from "../shopping-main/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Alfredo',
      'Healthy and delicious but fancy',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('Pack of noodles', 2),
      new Ingredient('Chicken', 1),
      new Ingredient('Cream of mushroom soup', 1),
      new Ingredient('Oregeno', .5)
      ]
    ),
    new Recipe(
      'Chili',
      'Healthy and delicious',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg',
      [new Ingredient('Sauce', 2),
      new Ingredient('Hamburger meat', 1),
      new Ingredient('Beans', 2),
      new Ingredient('Chili powder', 2)
      ]
    )
  ];

  constructor(private shoppingService: ShoppingSerivce) { }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToShoppingList(ingredients);
  }
}