import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KioskComponent } from './kiosk.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'kiosk', component: KioskComponent }
  ])],
  exports: [ RouterModule ]
})
export class KioskRoutingModule {}
