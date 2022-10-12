import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},//localhost:4200
  {path:'aboutus',component:AboutusComponent}, //localhost:4200/aboutus
  {path:'contactus', component:ContactusComponent}, //localhost:4200/contactus
  {path:'products',component:ProductsComponent,children:[    //child route
    // {path:'',component:ProductsComponent},  //localhost:4200/products
    {path:'laptop', component:LaptopComponent},        //localhost:4200/products/laptop
    {path:'washingmachine',component:WashingmachineComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:MobileComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}// wildcard path ,any path-like http://localhost:4200/login155gfhgfhgf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
