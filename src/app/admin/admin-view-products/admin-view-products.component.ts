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
  editProduct:any;
  edit_planId:any;
  edit_planName:any;
  edit_planPrice:any;
  edit_planData:any;
  edit_planValidity:any;
  edit_planCategory:any;
  edit_planSubscriptions:any;
  edit_planLocations:any;
  public productPlans:ProductPlansResponse[]=[]
  constructor(public uService:UserService,public adminService:AdminService,public router:Router){
    uService.getProductPlans()
  }
  check:any;
  editProductPlan(product:ProductPlansResponse){
    this.editProduct=product
    // localStorage.setItem("product",JSON.stringify(product))
    localStorage.setItem("editProduct",JSON.stringify(this.editProduct))
    localStorage.setItem("edit_planId",this.editProduct.planId)
    localStorage.setItem("edit_planName",this.editProduct.planName)
    localStorage.setItem("edit_planPrice",this.editProduct.planPrice)
    localStorage.setItem("edit_planData",this.editProduct.planData)
    localStorage.setItem("edit_planValidity",this.editProduct.planValidity)
    localStorage.setItem("edit_planCategory",this.editProduct.planCategory)
    localStorage.setItem("edit_planSubscriptions",this.editProduct.planSubscriptions)
    localStorage.setItem("edit_planLocations",this.editProduct.planLocations)

    this.check=JSON.parse(localStorage.getItem("product")+'').planId
    console.log(this.check);
    
    

    this.router.navigate(["/edit_product"])

  }
  deleteProductPlan(planId:string){
    this.adminService.deleteProduct(planId)
    Swal.fire("product deleted successfully");
  }

}
