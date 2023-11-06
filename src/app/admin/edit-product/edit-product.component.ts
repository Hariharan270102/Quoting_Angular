import { Component } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { ProductPlansResponse } from 'src/app/product-model/product-plans-response-pojo';
import { SubscriptionService } from 'src/app/subscription.service';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Locations } from 'src/app/modules/locations';
import { Subscriptions } from 'src/app/modules/subscriptions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
   // localStorage.setItem("product",JSON.stringify(product))
  //  this.check=JSON.parse(localStorage.getItem("product")+'').planId
  //   console.log(this.check);
  editProduct:any=JSON.parse(localStorage.getItem("editProduct")+"")
  
  
  subl:any[]=[]
  addObj:ProductPlansResponse|undefined;
  selectedLocations: { locId: number, locations: string }[] = [];
  selectedSubscriptions: { subId: number, subscription: string }[] = [];
  locationList:any[]=[]
  subscriptionList:any[]=[]

  constructor(public locService:LocationService,public subsService:SubscriptionService,
              public adminService:AdminService,
              private http:HttpClient,
              
              ){
    timer(3000)
    this.selectedLocations = this.editProduct.planLocations;
    console.log(this.selectedLocations)
    locService.getLocations();
    console.log(this.editProduct.planLocations);  
    for(let l of this.editProduct.planLocations)
    {
      this.locationList.unshift(l.locations)
    }
    console.log(this.locationList)
    for(let s of this.editProduct.planSubscriptions){

      this.subscriptionList.unshift(s.subscriptionName)
    }
    console.log(this.subscriptionList);
    
  }

  ngOnInit() {
    
    this.subsService.getSubscriptions();
  }

  addProductFormGroup = new FormGroup({
    planId: new FormControl(this.editProduct.planId, [Validators.required, Validators.pattern(/^[A-Z0-9@#$%^&*()_+|~=`{}[\]:";'<>?,./]{1,}$/)]),
    planName: new FormControl(this.editProduct.planName, [Validators.required]),
    planPrice: new FormControl(this.editProduct.planPrice, [Validators.required]),
    planValidity: new FormControl(this.editProduct.planValidity, [Validators.required]),
    planData: new FormControl(this.editProduct.planData, [Validators.required]),
    planCategory: new FormControl(this.editProduct.planCategory, [Validators.required]),
    planLocation: new FormArray([],[Validators.required]), // Use FormArray
    planSubscriptions: new FormArray([]) // Use FormArray
  });

  
  onSubmit() {
    if (this.addProductFormGroup.valid) {
      // Store selected locations and subscriptions in the lists



      
      console.log("valid form");
      console.log(this.selectedLocations)
      const planLocationControl = this.addProductFormGroup.get('planLocation');
      const planSubscriptionsControl = this.addProductFormGroup.get('planSubscriptions');

      // if (planLocationControl && planLocationControl.value) {
      //   console.log(planLocationControl.value)
      //   this.selectedLocations.unshift(planLocationControl.value[0]);
      // } 
      // else {
      //   this.selectedLocations = [];
      // }

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
      console.log(this.subscriptionList)
      this.editProduct.planSubscriptions.push()
      console.log(this.addProductFormGroup.value.planLocation)
      console.log(this.selectedLocations)
      this.addObj=new ProductPlansResponse(this.addProductFormGroup.value.planId,this.addProductFormGroup.value.planName,this.addProductFormGroup.value.planPrice,this.addProductFormGroup.value.planValidity,this.addProductFormGroup.value.planData,this.addProductFormGroup.value.planCategory,this.addProductFormGroup.value.planSubscriptions,this.selectedLocations)
      console.log(this.addObj);
      
      this.adminService.editProduct(this.addObj).subscribe()

      Swal.fire("Product edited successfully")
      
     
      
    }
  }
  // Add these methods to your component
  onLocationChange(event: Event, location: Locations) {
    const selectedLocations = this.addProductFormGroup.get('planLocation') as FormArray;
    console.log(selectedLocations)
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
      this.selectedLocations.unshift(selectedLocations.value[0]);
      console.log(this.selectedLocations)
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
