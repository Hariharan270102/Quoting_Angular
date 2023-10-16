import { Component } from '@angular/core';
import { NavServiceService } from '../nav-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(public eService:NavServiceService,private router:Router){}

  

}
