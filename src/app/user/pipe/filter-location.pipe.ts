import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../user.service';
import { timer } from 'rxjs';

@Pipe({
  name: 'filterPipe',
  pure:true
})
export class FilterLocationPipe implements PipeTransform {
  filteredProducts:any[]=[];
  constructor(private uService:UserService){

  }
  transform(products: any[], location: string, category: string): any[] {
    console.log(products);
    console.log(location);
    console.log(category);
    
    
    
    if (!location) {
      return products;
    }

    // Filter by location
     
    products.filter((products) =>
      { 
        products.planLocations.filter((locname:any)=>{ 
          if(locname.locations === location)
          {
            this.filteredProducts.shift();
            // return products;
            // this.filteredProducts.unshift(products)
          }
        })
        return this.filteredProducts;
      }
    );
 
    console.log(this.filteredProducts)
    
    // If no category is selected, return products filtered by location only
    if (!category) {
      return this.filteredProducts;
    }

    console.log(this.filteredProducts.filter(
      (product) =>{
         console.log(product.planCategory)}
    ))

    // Filter further by category
   return  this.filteredProducts.filter(
      (product) =>{
         if(product.planCategory === category)
         {
            
            this.filteredProducts.shift();
            console.log(this.filteredProducts)
         }
         return this.filteredProducts;
        }
          
    );

    console.log(this.filteredProducts)
  }



}
