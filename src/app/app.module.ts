import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingMainComponent } from './shopping-main/shopping-main.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingMainComponent,
    RecipeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
