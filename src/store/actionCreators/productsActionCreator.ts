import {
  ProductsActionsType,
  ProductAction,
  IProduct
} from './../reducers/productsReducers/ProductsTypes';
import { Dispatch } from 'redux';
import axios from 'axios';


export const fetchProducts = () => {

    return async(dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionsType.FETCH_PRODUCTS_START})
        try {
            const {data} = await  axios.get<IProduct[]>('https://fakestoreapi.com/products/')
            data.map(item=> {
                item.quantity = 1
                return item
            })
      
            
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_SUCCESS, payload:data}) 
            
        }
        catch(err) {
            
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_FAIL, payload: err})
        }
    };
}
