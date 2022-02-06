import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelOpenState = false;
  @Input() recipe!: Recipe;
  constructor() { }


  onEditRecipe() {
    console.log('edit recipe');
  }

  onDeleteRecipe() {
    console.log('delete recipe');
  }
  
  ngOnInit(): void {
  }

}
