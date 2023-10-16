import { Subscription } from "rxjs";
import { Subscriptions } from "../modules/subscriptions";
import { Locations } from "../modules/locations";

export class ProductPlansResponse{
    constructor(
        public planId:string|any,
        public planName:string|any,
        public planPrice:number|any,
        public planValidity:string|any,
        public planData:string|any,
        public planCategory:string|any,
        public planSubscriptions:Subscriptions[]|any,
        public planLocations:Locations[]|any
    ){}
}