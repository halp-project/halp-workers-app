import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { path: 'menus', loadChildren: 'app/menus/menus.module#MenusModule' },
  { path: 'dishes', loadChildren: 'app/dishes/dishes.module#DishesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
