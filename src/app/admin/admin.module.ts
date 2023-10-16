import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { AdminSearchProductsComponent } from './admin-search-products/admin-search-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import Swal from 'sweetalert2';




@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AdminHomepageComponent,
    AdminNavComponent,
    AdminViewProductsComponent,
    AdminSearchProductsComponent,
    AdminWelcomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
