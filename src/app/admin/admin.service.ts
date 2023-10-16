import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductPlans } from '../product-model/product-plan-pojo';
import { ProductPlansResponse } from '../product-model/product-plans-response-pojo';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:5051/productplan"

  constructor(private http:HttpClient) { }

  addProduct(productPlansObj:ProductPlansResponse){
    this.http.post<ProductPlans>(this.url,productPlansObj).subscribe((response)=>{console.log(response)})
  }

  editProduct(planId:string){
    // this.http.p
  }

  deleteProduct(planId:string){
    const params=new HttpParams().set('planId',planId);
    return this.http.delete(this.url,{params}).subscribe()
  }


}
