import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  img1 =
    'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg';

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test', this.img1),
    new Recipe('A Test Recipe', 'this is a test', this.img1),
    new Recipe('A Test Recipe', 'this is a test', this.img1),
  ];

  constructor() {}

  ngOnInit(): void {}
}
