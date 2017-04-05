import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';

import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule,
    NgbModule
  ],
  declarations: [ SignupComponent ]
})
export class SignupModule { }
