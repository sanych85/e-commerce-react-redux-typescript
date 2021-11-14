

import { SortingType } from './store/reducers/filterReducer/filterTypes';
import { IProduct } from './store/reducers/productsReducers/ProductsTypes';


interface ICategory {
  name?: string;
  checked?: boolean;
}


export const addNewItem = (array: IProduct[], payload: IProduct):IProduct[] => {
  return array.map((item:IProduct):IProduct => {

    if(item.id===payload.id) {
        return {
            ...item, quantity: item && item.quantity && item.quantity+1
        }
    }
    else {
        return item
    }
})
};


export const deleteItem = (array: IProduct[], payload: IProduct):IProduct[] => {
  return array.reduce((total:any, item:any):any => {
                    
    if(item.id===payload.id) {
      
        if(item && item.quantity && item.quantity >1) {

            const newItem = {
                ...item, quantity:item.quantity-1
            }
       
            total.push(newItem) 
            
        }
    }
    else {
        total.push({...item})
    }
   
    return total
    

},[])
}


export const calculateCartQuantity = (array: IProduct[]):number => {
 return array.reduce((total:number, item:IProduct):number => {

   if(item.quantity) {
     total+=item.quantity
   }
   return total
 },0)
}

export const  calculateTotalPrice =(array: IProduct[]):number=> {
  return array.reduce((total:number, item:IProduct):number => {
   
    if(item.quantity) {
      total+= +(item.quantity * item.price).toFixed(2)   
    }
    return total
  },0)
}


export const getCategory = (options:string[])=> {
  return  options.reduce((total: any, item:string): ICategory => {
    total[item] = false;
    return total; 
  }, {});
}


export const getOptions = (products:IProduct[])=> {
  return   [...new Set(products.map((item: IProduct): string => item.category)),
  ];
}

export const getMaxPrice = (products:IProduct[])=> {
  return Math.round(
    products.map((item) => item.price).sort((a, b) => b - a)[0]
  );
}

export const sortItem = (arr:IProduct[], type:"price" | "count" | "rate", direction: boolean)=> {
 return arr.sort((a,b)=>{
   if(type === "price") {
    return direction? a[type]-b[type]:b[type] - a[type]
   }
   else if(type==="count") {
    return direction? a.rating[type]-b.rating[type]:b.rating[type] - a.rating[type]
   }
   else {
    return direction? a.rating[type]-b.rating[type]:b.rating[type] - a.rating[type]
   } 
 })  
}