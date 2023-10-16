import { Component } from '@angular/core';
import { ProductPlans } from 'src/app/product-model/product-plan-pojo';
import { UserService } from '../user.service';
import { productPlanList } from 'src/app/product-model/product-plan-list';
import { Router } from '@angular/router';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  searchQuery: string = '';
  searchList:ProductPlansResponse[]=[]
  constructor(public uService:UserService,
              public router:Router){
                uService.getProductPlans()
    

  }
  searchProduct(){
    console.log('Search Query:', this.searchQuery);
    this.searchList = this.uService.searchProductPlan(this.searchQuery)

    
    // this.searchList=this.uService.getProductPlan(this.searchQuery);
    // console.log(this.searchList)
  
  }
  addToGenerateQuote(product:ProductPlansResponse){
    console.log(product)
    console.log(this.uService.addToQuote(product))
    Swal.fire("Great Plan! Plan added to View Quotes")
    // console.log(this.pl);
  }
  

}
