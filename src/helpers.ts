import { IProduct } from './store/reducers/productsReducers/ProductsTypes';

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
    console.log(total)
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