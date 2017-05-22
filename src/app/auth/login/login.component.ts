import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  workerToLogIn: Worker = new Worker();
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.logIn(this.workerToLogIn)
      .then((response) => {
        localStorage.setItem('id_token', response.json().id_token);
        this.routingByRole(response.json().role);
      })
      .catch((error: any) => {
        if (error.status === 400) {
          this.errorMessage = 'You must send the username and the password';
        } else {
          this.errorMessage = 'The username or password dont match'
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
