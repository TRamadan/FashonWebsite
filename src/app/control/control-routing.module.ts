import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CustomeTshirtComponent } from './custome-tshirt/custome-tshirt.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomepageComponent,
  },

  {
    path: 'contactus',
    component: ContactusComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },

  {
    path: 'aboutus',
    component: AboutusComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
  },

  {
    path: 'product_details',
    component: ProductdetailsComponent,
  },

  {
    path: 'customShirt',
    component: CustomeTshirtComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRoutingModule {}
