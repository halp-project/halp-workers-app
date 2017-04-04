import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { Menu } from './menu';

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

  menus: Menu[] = [];

}