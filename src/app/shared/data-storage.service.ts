import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "../recipe-main/recipe.service";
import { Recipe } from "../recipe-main/recipe.model";
import { map, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        let authToken = this.authService.token
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://recipe-book-43005-default-rtdb.firebaseio.com/recipes.json',
                recipes,
                {
                    params: new HttpParams().set("auth", authToken)
                }
            )
            .subscribe(res => {
                console.log(res);
            });
    }

    fetchRecipes() {
        let authToken = this.authService.token
        return this.http
            .get<Recipe[]>('https://recipe-book-43005-default-rtdb.firebaseio.com/recipes.json',
                {
                    params: new HttpParams().set("auth", authToken)
                }
            )
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
        let authToken = this.authService.token
        return this.http.delete<Recipe[]>(`https://recipe-book-43005-default-rtdb.firebaseio.com/recipes/${id}.json`,
            {
                params: new HttpParams().set("auth", authToken)
            }
        )
        .subscribe(res => {
            console.log(res);
        });
    }
}