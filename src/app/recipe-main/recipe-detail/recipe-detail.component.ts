import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelOpenState = false;
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
