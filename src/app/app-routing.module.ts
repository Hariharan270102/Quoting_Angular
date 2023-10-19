import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { ViewProductsComponent } from './user/view-products/view-products.component';
import { ViewQuotesComponent } from './user/view-quotes/view-quotes.component';
import { SearchProductComponent } from './user/search-product/search-product.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyAccountComponent } from './user/my-account/my-account.component';


const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'register_form',component:RegisterComponent},
  {path:'user_homepage',component:UserHomepageComponent},
  {path:'search_products',component:SearchProductComponent},
  {path:'logout',component:HomepageComponent},
  {path:'admin_homepage',component:AdminHomepageComponent},
  {path:'view_products',component:ViewProductsComponent},
  {path:'view_quotes',component:ViewQuotesComponent},
  {path:'forgot_password',component:ForgotPasswordComponent},
  {path:'send_otp',component:SendOtpComponent},
  {path:'change_password',component:ChangePasswordComponent},
  {path:'my_account',component:MyAccountComponent},
  // {path:'add_product',component:AddProductComponent},

  // {path:'admin_add_products',component:AddProductComponent},
  // {path:'admin_view_products',component:AdminViewProductComponent},
  // {path:'admin_edit_product',component:EditProductComponent},
  // {path:'admin_delete_product',component:DeleteProductComponent},
  {path:'**',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AdminModule,UserModule] 
  // exported the admin module so that we can perform admin module routings in the admin-routing-module.ts
})
export class AppRoutingModule { }
