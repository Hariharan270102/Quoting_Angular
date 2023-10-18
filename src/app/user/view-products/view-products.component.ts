import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { productPlanList, productCategory,productSubscriptions } from 'src/app/product-model/product-plan-list';
import { ProductPlans } from 'src/app/product-model/product-plan-pojo';
import { UserService } from '../user.service';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import { LocationService } from 'src/app/location.service';
import Swal from 'sweetalert2';
import { ViewQuote } from 'src/app/modules/view-quote';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {
 
  pl:any[]=[];
  locationAndCategory:any[]=[]

  ngOnInit(){
    // const plans= this.uService.getProductPlans();
    // const plans= this.uService.getProductPlans();
    // this.pl=[]
    // this.pl=plans
    // const locations=this.locService.getLocations();
    // this.pl=plans
    // this.locationList=locations
    // console.log(this.locationList);
    
  }

  constructor(public router:Router,
    private route:ActivatedRoute,
    public uService:UserService,public locService:LocationService){
   
  }

  setLocationAndCategory(location:any,category:any)
  {
    console.log("setLocation "+location +" setCategory "+category)
    this.uService.getProductPlansByLocationAndCategory(location,category)
  }

  // setLocationAndCategory(location:any,category:any){
  //   console.log("setLocationAndcategory"+location+" "+category)
  // }
  

  planCategory=this.uService.productCategory
  selectedLocation: any = localStorage.getItem("userLocation"); 
  selectedCategory=''
  


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

    // for(let i of viewQuote.planLocation){
    //   console.log(i.locations);
      
    // }
    // console.log(product)
    // console.log(this.uService.addToQuote(product))
    Swal.fire("Great plan! ")
    console.log("selected location"+this.selectedCategory);
    console.log("selected category"+this.selectedLocation);
    
  }

  


}

}

