export class ProductPlans
{
    constructor(
        public planId:string,
        public planName:string,
        public planPrice:number,
        public planValidity:string,
        public planData:string,
        public planCategory:string,
        public planSubscriptions:any[],
        public planLocation:any[]
        )
        {}

}