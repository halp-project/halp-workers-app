import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Menu } from './menus-grid/menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menu: Menu;

  state = 0;

  closeResult: string;
  id = 7;
  submitted = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  stateChangeMenus(){
    this.state = 0;
  }

  stateChangeDishes(){
    this.state = 1;
  }

  dishTabClass(){
    if(this.state == 0){
      return "nav-item";
    } else {
      return "nav-item active";
    }
  }

  menuTabClass(){
    if(this.state == 0){
      return "nav-item active";
    } else {
      return "nav-item";
    }
  }

  openNewMenuModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
