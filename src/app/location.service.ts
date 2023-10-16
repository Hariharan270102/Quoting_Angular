import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Locations } from './modules/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url = 'http://localhost:5051/locations';
  locations:Locations[]=[];

  

  constructor(public http: HttpClient) {}


  getLocations(){
    this.http.get<Locations[]>(this.url).subscribe((response:Locations[])=>{
      this.locations=[]
      for(let i of response){
        // console.log(typeof i);
        
        // console.log(i);
        
        this.locations.push(i);
        
      }
    });

    return this.locations

// console.log(this.locations);

// timer(3000).subscribe(()=>{this.display();});
   

  }

// display(){
//   for(let l of this.locations){
//     console.log(l.locations);
    
//   }
// }

  // getLocations(): Observable<Locations[]> {
  //   this.locations=this.http.get<any[]>(this.url);
  //   return this.locations
  // }
}
