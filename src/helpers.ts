import { IProduct } from './store/reducers/productsReducers/ProductsTypes';

export const changeCart = (array: IProduct[], payload: IProduct) => {
  console.log("array", array)
  console.log("payload", payload)
  const findItem = array.find((item) => item.id === payload.id);
  if (findItem) {
    
    return array.map((item) => {

      if(item.id===payload.id) {
        console.log("====")
        return {...item, quantity: {
          
        }}
        
        
      }
      else {
        return item
      }
      // return item.id === payload.id
      //   ? ...item,  quantity: {
      //     ...item.quantity, item.quantity+1 }
      //   : item;
    });
  } else {
    console.log(payload)
    return payload;
  }
};
