import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Menu } from './menu';
import {Dish} from '../../dishes/dishes-grid/dish';

@Component({
  selector: 'app-menus-grid',
  templateUrl: './menus-grid.component.html',
  styleUrls: ['./menus-grid.component.css']
})
export class MenusGridComponent implements OnInit, OnChanges {

  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.menus.push(changedProperty.currentValue);
      }
    }
  }

  deleteMenu(menuId) {
    this.menus.splice(menuId, 1);
  }

  starters: Dish[] = [
    {id: 0,
    name: "Salad",
    image: "",
    description: "",
    type: 0},
    {id: 1,
    name: "Soup",
    image: "",
    description: "",
    type: 0}
  ];
  mainDish: Dish [] = [
    {id: 2,
    name: "Grilled salmon",
    image: "",
    description: "",
    type: 1},
    {id: 3,
    name: "Chicken breast",
    image: "",
    description: "",
    type: 1}
  ];
  dessert: Dish[] = [
    {id: 4,
    name: "Yoghurt",
    image: "",
    description: "",
    type: 2},
    {id: 5,
    name: "Apple cake",
    image: "",
    description: "",
    type: 2}
  ];

  menus: Menu[] = [
    {
      id: 0,
      date: '21-03-2017',
      firstDish: this.starters,
      secondDish: this.mainDish,
      dessert: this.dessert
    },
    {
      id: 1,
      date: '22-03-2017',
      firstDish: this.starters,
      secondDish: this.mainDish,
      dessert: this.dessert
    },
    {
      id: 2,
      date: '23-03-2017',
      firstDish: this.starters,
      secondDish: this.mainDish,
      dessert: this.dessert
    },
    {
      id: 3,
      date: '24-03-2017',
      firstDish: this.starters,
      secondDish: this.mainDish,
      dessert: this.dessert
    },
    {
      id: 4,
      date: '25-03-2017',
      firstDish: this.starters,
      secondDish: this.mainDish,
      dessert: this.dessert
    }
  ];

}