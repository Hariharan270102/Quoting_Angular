import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import { UserService } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent {
  public productPlans:ProductPlansResponse[]=[]
  constructor(public uService:UserService,public adminService:AdminService,public router:Router){
    uService.getProductPlans()
  }

  editProductPlan(product:ProductPlansResponse){
    this.router.navigate(["/edit_product"])

  }
  deleteProductPlan(planId:string){
    this.adminService.deleteProduct(planId)
    Swal.fire("product deleted successfully");
  }

}
