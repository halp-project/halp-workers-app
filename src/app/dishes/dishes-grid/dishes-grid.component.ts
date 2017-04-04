import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Dish } from './dish';

@Component({
  selector: 'app-dishes-grid',
  templateUrl: './dishes-grid.component.html',
  styleUrls: ['./dishes-grid.component.css']
})
export class DishesGridComponent implements OnInit, OnChanges {

  @Input() dish: Dish;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.dishes.push(changedProperty.currentValue);
      }
    }
  }

  deleteDish(dishId) {
    this.dishes.splice(dishId, 1);
  }

  dishes: Dish[] = [
    {
      id: 1,
      name: 'Salad', 
      image: 'https://www.hungryhowies.com/sites/default/files/images/menu-items/thumbnails/garden-salad-thumb.png',
      description: 'Description of the "Salad" dish...',
      type: 0
    },
    {
      id: 2,
      name: 'Roast beef', 
      image: 'https://t1.uc.ltmcdn.com/images/1/1/2/img_25211_ins_3692757_600.jpg',
      description: 'Description of the "Roast beef" dish...',
      type: 1
    },
    {
      id: 3,
      name: 'Salad', 
      image: 'https://www.hungryhowies.com/sites/default/files/images/menu-items/thumbnails/garden-salad-thumb.png',
      description: 'Description of the "Salad" dish...',
      type: 0
    },
    {
      id: 4,
      name: 'Roast beef', 
      image: 'https://t1.uc.ltmcdn.com/images/1/1/2/img_25211_ins_3692757_600.jpg',
      description: 'Description of the "Roast beef" dish...',
      type: 1
    },
    {
      id: 5,
      name: 'Fish and Chips', 
      image: 'http://images.friendlyrentals.com/FR_imgs/blog/PrImg_3056.jpg',
      description: 'Description of the "Fish and Chips" dish...',
      type: 1
    },
    {
      id: 6,
      name: 'Apple cake', 
      image: 'http://www.onceuponachef.com/images/2011/09/french-apple-cake.jpg',
      description: 'Description of the "Apple cake" dish...',
      type: 2
    },
    {
      id: 7,
      name: 'Yogurt', 
      image: 'https://carolynthomas.files.wordpress.com/2009/10/activia_mixed_berry.png?w=275',
      description: 'Description of the "Yogurt" dish...',
      type: 2
    }
  ];

}
