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

  workerToSignUp: Worker = new Worker();

  roles = [
    'assistant',
    'book',
    'food',
    'kiosk',
    'admin'
  ]

  constructor(
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signUp(this.workerToSignUp).then((response) => {
      if (response.json().token) {
        localStorage.setItem('id_token', response.json().token);
        this.routingByRole(this.workerToSignUp.role);
      }
    });
  }

  routingByRole(role: string): void {
    switch (role) {
      case 'assistant': {
        this.router.navigate(['orders']);
        break;
      }

      case 'book': {
        this.router.navigate(['books']);
        break;
      }

      case 'food': {
        this.router.navigate(['meals']);
        break;
      }

      case 'kiosk': {
        this.router.navigate(['kiosk']);
        break;
      }

      case 'admin': {
        this.router.navigate(['patients']);
        break;
      }
    }
  }

}
