import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KioskComponent } from './kiosk.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: KioskComponent }
  ])],
  exports: [ RouterModule ]
})
export class KioskRoutingModule {}
