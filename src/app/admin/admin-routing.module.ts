import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';

const routes: Routes = [
  {path:'admin_homepage',component:AdminHomepageComponent},
  {path:'add_product',component:AddProductComponent},
  {path:'admin_view_products',component:AdminViewProductsComponent},
  {path:'edit_product',component:EditProductComponent},
  {path:'delete_product',component:DeleteProductComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
