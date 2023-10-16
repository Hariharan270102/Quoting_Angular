import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/location.service';
import { Subscriptions } from 'src/app/modules/subscriptions';
import { SubscriptionService } from 'src/app/subscription.service';
import { FormArray } from '@angular/forms';
import { timer } from 'rxjs';
import { AdminService } from '../admin.service';
import { ProductPlans } from 'src/app/product-model/product-plan-pojo';
import { Locations } from 'src/app/modules/locations';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
  
  subl:any[]=[]
  addObj:ProductPlansResponse|undefined;
  selectedLocations: { locId: number, locations: string }[] = [];
  selectedSubscriptions: { subId: number, subscription: string }[] = [];
  

// ... The rest of your component code


  constructor(public locService:LocationService,public subsService:SubscriptionService,
              public adminService:AdminService,
              private http:HttpClient,
              
              ){
    timer(3000)
    locService.getLocations();
    // console.log(locationList);  
  }

  ngOnInit() {
    this.subsService.getSubscriptions();
  }

  addProductFormGroup = new FormGroup({
    planId: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z0-9@#$%^&*()_+|~=`{}[\]:";'<>?,./]{1,}$/)]),
    planName: new FormControl('', [Validators.required]),
    planPrice: new FormControl('', [Validators.required]),
    planValidity: new FormControl('', [Validators.required]),
    planData: new FormControl('', [Validators.required]),
    planCategory: new FormControl('', [Validators.required]),
    planLocation: new FormArray([],[Validators.required]), // Use FormArray
    planSubscriptions: new FormArray([]) // Use FormArray
  });

  
  onSubmit() {
    if (this.addProductFormGroup.valid) {
      // Store selected locations and subscriptions in the lists
      console.log("valid form");
      
      const planLocationControl = this.addProductFormGroup.get('planLocation');
      const planSubscriptionsControl = this.addProductFormGroup.get('planSubscriptions');

      if (planLocationControl && planLocationControl.value) {
        this.selectedLocations = planLocationControl.value;
      } else {
        this.selectedLocations = [];
      }

      if (planSubscriptionsControl && planSubscriptionsControl.value) {
        this.selectedSubscriptions = planSubscriptionsControl.value;
      } else {
        this.selectedSubscriptions = [];
      }

      console.log('Form submitted with the following data:');
      console.log(this.addProductFormGroup.value);
      console.log('Selected Locations:', this.selectedLocations);
      console.log('Selected Subscriptions:', this.selectedSubscriptions);
      const add_product=this.addProductFormGroup.value
      console.log("form value "+add_product);
      this.addObj=new ProductPlansResponse(this.addProductFormGroup.value.planId,this.addProductFormGroup.value.planName,this.addProductFormGroup.value.planPrice,this.addProductFormGroup.value.planValidity,this.addProductFormGroup.value.planData,this.addProductFormGroup.value.planCategory,this.addProductFormGroup.value.planSubscriptions,this.addProductFormGroup.value.planLocation)
      console.log(this.addObj);
      
      this.adminService.addProduct(this.addObj)
      // this.http.post("http://localhost:5051/productplan",add_product).subscribe((response)=>{console.log(response);})
      Swal.fire("Product added successfully")
      
     
      
    }
  }
  // Add these methods to your component
  onLocationChange(event: Event, location: Locations) {
    const selectedLocations = this.addProductFormGroup.get('planLocation') as FormArray;
    if (event.target instanceof HTMLInputElement) {
      if (event.target.checked) {
        selectedLocations.push(new FormControl(location));
      } else {
        const index = selectedLocations.controls.findIndex((control) => {
          const loc = control.value as Locations;
          return loc.locId === location.locId;
        });
        if (index >= 0) {
          selectedLocations.removeAt(index);
        }
      }
      this.selectedLocations = selectedLocations.value;
    }
  }
  
  onSubscriptionChange(event: Event, subscription: Subscriptions) {
    const selectedSubscriptions = this.addProductFormGroup.get('planSubscriptions') as FormArray;
    if (event.target instanceof HTMLInputElement) {
      if (event.target.checked) {
        selectedSubscriptions.push(new FormControl(subscription));
      } else {
        const index = selectedSubscriptions.controls.findIndex((control) => control.value === subscription);
        if (index >= 0) {
          selectedSubscriptions.removeAt(index);
        }
      }
    }
  }
  
  

}
