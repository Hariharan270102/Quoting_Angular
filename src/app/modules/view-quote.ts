export class ViewQuote{
    constructor(public userEmail:string,
                public userPhonenumber:string,
                public planId:string,
                public planName:string,
                public planPrice:number,
                public planData:string,
                public planValidity:string,
                public planCategory:string,
                public planSubscription:any[],
                public planLocations:any[],
                public quantity:number
                ){

    }
    
}