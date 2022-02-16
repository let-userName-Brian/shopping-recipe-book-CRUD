import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipe-main/recipe.service";
import { Recipe } from "../recipe-main/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://recipe-book-43005-default-rtdb.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe(res => {
                console.log(res);
            });
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>('https://recipe-book-43005-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                })
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }

    deleteRecipe(id: number) {
        return this.http.delete(`https://recipe-book-43005-default-rtdb.firebaseio.com/recipes/${id}.json`);
    }
}