import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    NgbModule
  ],
  declarations: [ 
    AuthComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
