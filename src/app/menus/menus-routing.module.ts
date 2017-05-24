import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { MenusComponent } from './menus.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'menus', component: MenusComponent }
  ])],
  exports: [ RouterModule ]
})
export class MenusRoutingModule {}
