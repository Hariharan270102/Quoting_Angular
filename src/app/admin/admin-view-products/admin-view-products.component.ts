import { Component } from '@angular/core';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent {
  public productPlans:ProductPlansResponse[]=[]
  constructor(public uService:UserService,){
    uService.getProductPlans()
  }

  editProductPlan(product:ProductPlansResponse){
    

  }
  deleteProductPlan(product:ProductPlansResponse){

  }

}
