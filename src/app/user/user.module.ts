import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { FormsModule } from '@angular/forms';
import { FilterLocationPipe } from './pipe/filter-location.pipe';
import { CategoryFilterPipe } from './pipe/category-filter.pipe';
import { WelcomeComponent } from '../nav-bar/welcome.component';
import { MyAccountComponent } from './my-account/my-account.component';





@NgModule({
  declarations: [
    UserHomepageComponent,
    UserNavComponent,
    ViewQuotesComponent,
    SearchProductComponent,
    ViewProductsComponent,
    FilterLocationPipe,
    CategoryFilterPipe,
    MyAccountComponent,
    
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    
  ],
  
})

export class UserModule { }
