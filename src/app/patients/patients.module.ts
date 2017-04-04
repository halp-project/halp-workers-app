import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientsGridComponent } from './patients-grid/patients-grid.component';
import { PatientCardComponent } from './patients-grid/patient-card/patient-card.component';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [ PatientsComponent, PatientsGridComponent, PatientCardComponent ]
})
export class PatientsModule { }
