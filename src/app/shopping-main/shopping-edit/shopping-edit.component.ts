import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingSerivce } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  constructor(private shoppingService: ShoppingSerivce) { }
  onAddItem() {
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
  ngOnInit(): void {
  }

}
