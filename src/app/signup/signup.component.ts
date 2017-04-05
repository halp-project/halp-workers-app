import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  adminRole: string;
  router: Router;

  constructor() { }

  ngOnInit() {

  }

  navigate() {
    this.router.navigateByUrl('/' + this.adminRole);
  }

  change() {
    console.log(this.adminRole);
  }

}
