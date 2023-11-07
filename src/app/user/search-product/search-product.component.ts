import { Component } from '@angular/core';
import { ProductPlans } from 'src/app/product-model/product-plan-pojo';
import { UserService } from '../user.service';
import { productPlanList } from 'src/app/product-model/product-plan-list';
import { Router } from '@angular/router';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import Swal from 'sweetalert2';
import { ViewQuote } from 'src/app/modules/view-quote';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  searchQuery: string = '';
  searchList:ProductPlansResponse[]=[]
  products:any;
  constructor(public uService:UserService,
              public router:Router){
                uService.getProductPlans()
    

  }
  onSearch()
  {
   
     const flag=this.uService.searchProduct(this.searchQuery).subscribe((result)=>{this.products=result});
     
     if(!flag)
     console.log('unable to process the request');
 
  } 
  //not used using onSearch() instead of the below method
  searchProduct(){

    console.log('Search Query:', this.searchQuery);
    this.searchList = this.uService.searchProductPlan(this.searchQuery)
   
  }

  addToGenerateQuote(product:ProductPlansResponse){
    console.log("from local storage trying to get email of user");
    const userEmail=localStorage.getItem("userEmail");
    const userPhonenumber=localStorage.getItem("userPhonenumber");  
    console.log(userEmail);
    console.log(userPhonenumber);
      
  // Check if the required values are present
  if (userEmail && userPhonenumber) {
// Assuming product is of type ProductPlansResponse
    const subs: string[] = product.planSubscriptions.map((item: { subscriptionName: string }) => item.subscriptionName);
    const locs: string[] = product.planLocations.map((item: { locations: string }) => item.locations);

    // Create a ViewQuote object with the values from local storage and the product parameter
    const viewQuote = new ViewQuote(
      userEmail,
      userPhonenumber,
      product.planId,
      product.planName,
      product.planPrice,
      product.planData,
      product.planValidity,
      product.planCategory,
      subs,
      locs,
      1
    );

    this.uService.viewQuoteDb(viewQuote)

    // Log the created ViewQuote object
    console.log("from view quote object");
    
    console.log(viewQuote);

    Swal.fire("Great Plan! Plan added to View Quotes")   
    
  }
  // addToGenerateQuote(product:ProductPlansResponse){
  //   console.log(product)
  //   console.log(this.uService.addToQuote(product))
  //   Swal.fire("Great Plan! Plan added to View Quotes")
  //   // console.log(this.pl);
  // }
  

}
}
