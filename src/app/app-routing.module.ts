import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { Day2Component } from './components/day2/day2.component';
import { Day5Component } from './components/day5/day5.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductLab4Component } from './components/product-lab4/product-lab4.component';
import { ProuductdetailsLinkComponent } from './components/prouductdetails-link/prouductdetails-link.component';
import { UserRegistComponent } from './components/user-regist/user-regist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"day2",component:Day2Component},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"parent",component:ParentComponent},
  {path:"product-lab4",component:ProductLab4Component},
  {path:"product/:id",component:ProuductdetailsLinkComponent},
  {path:"day5",component:Day5Component},
  {path:"regist",component:UserRegistComponent},
  {path:"admin",component:NewProductComponent},
  {path:"admin/insertproduct",redirectTo:"day5"},

  
  {path:"**",component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
