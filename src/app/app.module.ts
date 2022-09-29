import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderAddressComponent } from './order-address/order-address.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ApiCallerService } from './api-caller.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    FoodlistComponent,
    HomeComponent,
    NavbarComponent,
    OrderAddressComponent,
    OrderCardComponent,
    OrderConfirmationComponent,
    RestaurantsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
  ],
  providers: [ApiCallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
