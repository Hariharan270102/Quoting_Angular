import { Injectable } from '@angular/core';
import { productPlanList } from '../product-model/product-plan-list';
import { ProductPlans } from '../product-model/product-plan-pojo';
import { locations } from '../product-model/product-plan-list';
import { productCategory } from '../product-model/product-plan-list';
import { HttpClient } from '@angular/common/http';
import { ProductPlansResponse } from '../product-model/product-plans-response-pojo';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:5051/productplan"

  plans:ProductPlansResponse[]=[]
  planList:ProductPlans[]=productPlanList;
  planSearch:ProductPlansResponse[]=[];
  locationList=locations
  productCategory=productCategory
  quoteList:ProductPlansResponse[]=[]


  constructor(private http:HttpClient) { }

  searchProductPlan(planName: string){

    const uniqueResults = new Set<ProductPlansResponse>();
  
    for (const i of this.plans) {
      if (i.planName === planName) {
        uniqueResults.add(i);
      }
    }
  
    // Convert the Set back to an array
    const planSearch: ProductPlansResponse[] = [...uniqueResults];
    return planSearch;


  }


  getProductPlans(){  
    console.log('in service')
    this.http.get<ProductPlansResponse[]>(this.url).subscribe((response:ProductPlansResponse[])=>{
      this.plans=[]
      for(let i of response){
        this.plans.push(i)
      }
      console.log(this.plans)
     })     
     return this.plans;

  }

  ProductPlansByLocationAndCategory:ProductPlansResponse[]=[]
  
  getProductPlansByLocationAndCategory(selectedLocation: any, selectedCategory: any) {
    console.log(typeof selectedCategory);
    if(selectedCategory===''){
      selectedCategory='NULL';
    }
    this.http.get<ProductPlansResponse[]>(this.url + '/location_category?selectedLocation=' + selectedLocation + '&selectedCategory=' + selectedCategory).subscribe((response: ProductPlansResponse[]) => {
      this.ProductPlansByLocationAndCategory=response
        console.log(this.ProductPlansByLocationAndCategory);
    });
}


  // getProducts(){
  //   return this.planList;
  // }
  
  // getProduct(planName: string): ProductPlans[] {
  //   // Use a Set to store unique search results
  //   const uniqueResults = new Set<ProductPlans>();
  
  //   for (const plan of this.planList) {
  //     if (plan.planName === planName) {
  //       uniqueResults.add(plan);
  //     }
  //   }
  
  //   // Convert the Set back to an array
  //   const planSearch: ProductPlans[] = [...uniqueResults];
  
  //   return planSearch;
  // }

getQuotesByPlanId(planId: string): ProductPlans[] {
  // Implement the logic to fetch quotes based on planId
  // For example, filter the quotes array to get quotes with the matching planId
  return this.planList.filter((quote) => quote.planId === planId);
}

addToQuote(product:ProductPlansResponse):string{
  this.quoteList.push(product)
  return "added successfully"
}

getQuote(){
  return this.quoteList
}



}
