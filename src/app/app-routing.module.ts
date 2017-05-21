import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
