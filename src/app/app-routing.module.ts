import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { ShoppingMainComponent } from './shopping-main/shopping-main.component';
import { RecipeStartComponent } from './recipe-main/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-main/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-main/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeMainComponent, children: [
    { path: '', component:  RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping', component: ShoppingMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
