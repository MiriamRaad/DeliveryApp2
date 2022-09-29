import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HomeComponent } from './home/home.component';
import { OrderAddressComponent } from './order-address/order-address.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurants/foodlist/:id", component: FoodlistComponent },
  { path: "OrderCard", component: OrderCardComponent },
  { path: "ContactUs", component: ContactComponent },
  { path: "AboutUs", component: AboutUsComponent },
  { path: "OrderCard/OrderAddress", component: OrderAddressComponent },
  { path: "OrderConfirmation", component: OrderConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }