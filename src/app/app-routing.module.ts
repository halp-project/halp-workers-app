import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: 'menus', loadChildren: 'app/menus/menus.module#MenusModule' },
  { path: 'dishes', loadChildren: 'app/dishes/dishes.module#DishesModule' },
  { path: 'kiosk', loadChildren: 'app/kiosk/kiosk.module#KioskModule' },
  { path: 'patients', loadChildren: 'app/patients/patients.module#PatientsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
