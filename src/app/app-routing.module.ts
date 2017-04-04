import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'kiosk', loadChildren: 'app/kiosk/kiosk.module#KioskModule' },
  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: 'patients', loadChildren: 'app/patients/patients.module#PatientsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
