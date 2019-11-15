import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() resipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('recipe name', 'This is a test recipe','https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
    new Recipe('recipe 2', 'new recipe','https://image.shutterstock.com/image-vector/angular-emblem-white-letter-on-600w-1527054845.jpg')

  ];
  onSelectedRecipe(resp :Recipe){
    this.resipeWasSelected.emit(resp)
  }
  constructor() { }

  ngOnInit() {
  }

}
