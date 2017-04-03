import {Dish} from '../dishes/dish';

export class Menu {
  id: number;
  date: Date;
  firstDish : Dish[];
  secondDish : Dish[];
  dessert : Dish[];


  constructor(
    id: number,
    date: Date,
    firstDish : Dish[],
    secondDish : Dish[],
    dessert : Dish[]
  ) { }
}