import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'patients', component: PatientsComponent }
  ])],
  exports: [ RouterModule ]
})
export class PatientsRoutingModule {}
