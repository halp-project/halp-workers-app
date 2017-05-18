import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { Worker } from '../worker';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  adminRole: string;
  router: Router;

  workerToSignUp: Worker = new Worker();

  roles = [
    'assistant',
    'book',
    'food',
    'kiosk',
    'admin'
  ]

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signUp(this.workerToSignUp);
  }

}
