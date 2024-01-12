import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import Swal from 'sweetalert2';

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

  logout(){
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out", "You have been logged out.", "success").then(()=>{ 
          this.route.navigate(['/logout']);
          
      })
      }
    }); 
  
  }

}
