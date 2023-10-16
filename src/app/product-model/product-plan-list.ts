import { ProductPlans } from "./product-plan-pojo";


export let productPlanList:ProductPlans[]=[new ProductPlans('JIO_BP1','Basic Plan',399,'28 days','2Gb/day','WIRELESS',['AmazonPrime','Hotstar'],['Chennai']),
new ProductPlans('AIR_BP1','Basic Plan +',499,'58 days','1.5Gb/day','WIRELESS',['Hotstar'],['Mumbai']),
new ProductPlans('AIR_BP2','Basic Plan',599,'58 days','1.5Gb/day','WIRELESS',['Hotstar'],['Chennai']),
new ProductPlans('AIR_BP3','Basic Plan',499,'58 days','1.5Gb/day','WIRELESS',['Hotstar'],['Kolkata'])


]

export let locations:string[]=['Chennai','Mumbai','Kolkata']

export let productCategory:string[]=['WIRELINE','WIRELESS']

export let productSubscriptions:string[]=['Hotstar','Amazonprime','Zee5','Netflix']
