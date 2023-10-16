import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private uService:UserService,private route:Router){}
  adminViewProducts(){
    this.uService.getProductPlans()
    this.route.navigate(['/admin_view_products'])
  }

}
