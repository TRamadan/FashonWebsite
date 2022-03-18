import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './control.component';
import { HeaderComponent } from './main-view/header/header.component';
import { FooterComponent } from './main-view/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { CustomeTshirtComponent } from './custome-tshirt/custome-tshirt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FirstsectionComponent } from './././homepage/firstsection/firstsection.component';
import { WelcomesectionComponent } from './././homepage/welcomesection/welcomesection.component';
import { OurservicesComponent } from './././homepage/ourservices/ourservices.component';
import { OurcategoriesComponent } from './././homepage/ourcategories/ourcategories.component';
import { AboutusnewComponent } from './././homepage/aboutusnew/aboutusnew.component';
import { OurproductsComponent } from './././homepage/ourproducts/ourproducts.component';
import { GoodcompanyComponent } from './././homepage/goodcompany/goodcompany.component';
import { ShowcustomComponent } from './././homepage/showcustom/showcustom.component';
@NgModule({
  declarations: [
    ControlComponent,
    MainViewComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ContactusComponent,
    ProfileComponent,
    FaqsComponent,
    ServicesComponent,
    AboutusComponent,
    ProductdetailsComponent,
    ProductsComponent,
    CustomeTshirtComponent,
    CartComponent,
    FirstsectionComponent,
    WelcomesectionComponent,
    OurservicesComponent,
    OurcategoriesComponent,
    AboutusnewComponent,
    OurproductsComponent,
    GoodcompanyComponent,
    ShowcustomComponent,
  ],
  imports: [
    CommonModule,
    ControlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class ControlModule {}
