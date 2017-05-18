import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { KioskModule } from './kiosk/kiosk.module';
import { PatientsModule } from './patients/patients.module';
import { DishesModule } from './dishes/dishes.module';
import { MenusModule } from './menus/menus.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BooksModule,
    KioskModule,
    DishesModule,
    MenusModule,
    AuthModule,
    OrdersModule,
    PatientsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
