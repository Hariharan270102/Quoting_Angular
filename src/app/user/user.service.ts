import { Injectable } from '@angular/core';
import { productPlanList } from '../product-model/product-plan-list';
import { ProductPlans } from '../product-model/product-plan-pojo';
import { locations } from '../product-model/product-plan-list';
import { productCategory } from '../product-model/product-plan-list';
import { HttpClient } from '@angular/common/http';
import { ProductPlansResponse } from '../product-model/product-plans-response-pojo';
import { ViewQuote } from '../modules/view-quote';
import { Observable, catchError, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:5051/productplan"

  quote_url="http://localhost:5052/view-quote"

  excel_url="http://localhost:5052/generate-excel"


  plans:ProductPlansResponse[]=[]
  planList:ProductPlans[]=productPlanList;
  planSearch:ProductPlansResponse[]=[];
  locationList=locations
  productCategory=productCategory
  quoteList:ViewQuote[]=[]


  constructor(private http:HttpClient) { }

  searchProduct(productItem:string)
  {
    return this.http.get(`${this.url}/search-product/${productItem}`);
  }
  //not used using searchProduct() instead of the below method
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
    this.http.get<ProductPlansResponse[]>(this.url + '/location_category?selectedLocation=' + selectedLocation + '&selectedCategory=' + selectedCategory).subscribe((response: ProductPlansResponse[]) => {
      this.ProductPlansByLocationAndCategory=response
        console.log(this.ProductPlansByLocationAndCategory);
        console.log(response)
    });
}

    viewQuoteDb(viewQuote:ViewQuote){
      console.log("from view quote service");
      
      this.http.post<ViewQuote>(this.quote_url,viewQuote).subscribe((response)=>{console.log(response);
      })
    }

    getQuoteDb(userEmail:string):Observable<ViewQuote[]>{
      console.log("from get quote db");
      console.log(userEmail);   
      return this.http.get<ViewQuote[]>(`${this.quote_url}?userEmail=${userEmail}`)

    }

    removePlanQuantityFromQuote(quote:ViewQuote){
      return this.http.put(this.quote_url,quote)

    }

    deletePlanFromQuote(quote:ViewQuote){
      const planId=quote.planId;
      const userEmail=quote.userEmail
      return this.http.delete(this.quote_url+"?planId="+planId+"&userEmail="+userEmail)
    }



//not used anywhere
getQuotesByPlanId(planId: string): ProductPlans[] {
  // Implement the logic to fetch quotes based on planId
  // For example, filter the quotes array to get quotes with the matching planId
  return this.planList.filter((quote) => quote.planId === planId);
}

addToQuote(product:ProductPlansResponse):string{
  // this.quoteList.push(product)
  return "added successfully"
}

getQuote(){
  return this.quoteList
}


}
