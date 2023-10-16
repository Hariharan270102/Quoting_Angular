import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private uService:UserService,private route:Router,private locService:LocationService){}

  startQuote(){
    console.log('ihekfjvhr')
    this.uService.getProductPlans()
    this.locService.getLocations()
    this.route.navigate(['/view_products'])
  }

}
