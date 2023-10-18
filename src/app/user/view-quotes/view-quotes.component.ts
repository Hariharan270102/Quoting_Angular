import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPlans } from 'src/app/product-model/product-plan-pojo';
import { UserService } from '../user.service';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import { ViewQuote } from 'src/app/modules/view-quote';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css']
})
export class ViewQuotesComponent  implements OnInit{
  totalQuote=0
  planId:string=''
  constructor(public router:Router,
    private route:ActivatedRoute,private uService:UserService){}

  quoteList:ViewQuote[]=[]

  // ngOnInit() {
    
  //   this.route.params.subscribe((params)=>{this.planId=params['planId'];
  //   console.log("Received planId:",this.planId)
  //   this.loadQuotesByPlanId(this.planId);

  //   // this.quoteList = this.uService.getQuotesByPlanId(this.planId);

  // });

  // }
  ngOnInit() {
    const userEmail:any=localStorage.getItem("userEmail")
    this.uService.getQuoteDb(userEmail).subscribe((response: ViewQuote[]) => {
      console.log(response);
      this.quoteList = response; // Assign the retrieved quotes
      this.calculateTotalQuote(); // Calculate the total quote
    });

    this.route.params.subscribe((params) => {
      this.planId = params['planId'];
    });
  }



  calculateTotalQuote() {
    this.totalQuote = this.quoteList.reduce((total, quote) => {
      return total + quote.planPrice * quote.quantity;
    }, 0);
  }

  getTotalQuantity(): number {
    return this.quoteList.reduce((total, quote) => total + quote.quantity, 0);
  }
  
  removePlanQuantityFromQuoteList(quote:ViewQuote){
    this.uService.removePlanQuantityFromQuote(quote).subscribe()
  }
  deletePlanFromQuoteList(quote:ViewQuote){
    this.uService.deletePlanFromQuote(quote).subscribe()

  }
}
