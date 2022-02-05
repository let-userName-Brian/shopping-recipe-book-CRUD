import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingMainComponent } from './shopping-main/shopping-main.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeListComponent } from './recipe-main/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-main/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingMainComponent,
    RecipeMainComponent,
    RecipeListComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
