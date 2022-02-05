import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingMainComponent } from './shopping-main/shopping-main.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeListComponent } from './recipe-main/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-main/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-main/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-main/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingMainComponent,
    RecipeMainComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
