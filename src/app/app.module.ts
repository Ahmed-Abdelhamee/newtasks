import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Error404Component } from './components/error404/error404.component';
import { SideComponent } from './components/side/side.component';
import { ProductsComponent } from './components/products/products.component';
import { Productard } from './components/directive/ProductCard.directive';
import { CreditCardPipe } from './pips/credit-card.pipe';
import { GetDatePipe } from './pips/get-date.pipe';
import { ProductLab4Component } from './components/product-lab4/product-lab4.component';
import { ProductDetailsLab4Component } from './components/product-details-lab4/product-details-lab4.component';
import { ProuductdetailsLinkComponent } from './components/prouductdetails-link/prouductdetails-link.component';
import { Day5Component } from './components/day5/day5.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistComponent } from './components/user-regist/user-regist.component';
import { NewProductComponent } from './components/new-product/new-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    Error404Component,
    SideComponent,
    ProductsComponent,
    Productard,
    CreditCardPipe,
    GetDatePipe,
    ProductLab4Component,
    ProductDetailsLab4Component,
    ProuductdetailsLinkComponent,
    Day5Component,
    UserRegistComponent,
    NewProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
