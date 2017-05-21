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
  workerToSignUp: Worker = new Worker();
  roles = [
    'assistant',
    'book'
  ];
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signUp(this.workerToSignUp)
      .then((response) => {
        localStorage.setItem('id_token', response.json().token);
        this.routingByRole(this.workerToSignUp.role);
      })
      .catch((error: any) => {
        if (error.status === 400) {
          this.errorMessage = 'Please, complete all fields.';
        } else if (error.status === 409) {
          this.errorMessage = 'A user with that username already exists.'
        } else {
          this.errorMessage = 'Error creating the user.'
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

      case 'admin': {
        this.router.navigate(['patients']);
        break;
      }
    }
  }

}
