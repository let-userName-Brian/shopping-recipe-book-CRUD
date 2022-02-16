import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingMainComponent } from './shopping-main/shopping-main.component';
import { RecipeMainComponent } from './recipe-main/recipe-main.component';
import { RecipeListComponent } from './recipe-main/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-main/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-main/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-main/shopping-edit/shopping-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DropdownDirtective } from './shared/dropdown.directive';
import {MatMenuModule} from '@angular/material/menu';
import { ShoppingSerivce } from './shopping-main/shopping.service';
import { RecipeStartComponent } from './recipe-main/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-main/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe-main/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingMainComponent,
    RecipeMainComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirtective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingSerivce, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
