import {
  ProductsActionsType,
  ProductAction,
} from './../reducers/productsReducers/ProductsTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

interface IProduct {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: any
    title: string
}
export const fetchProducts = () => {
    console.log('we are here')
    return async(dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductsActionsType.FETCH_PRODUCTS_START})
        console.log('gdfgfd')
        try {
            const {data} = await  axios.get<IProduct[]>('https://fakestoreapi.com/products/')
            console.log(data)
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_SUCCESS, payload:data}) 
            
        }
        catch(err) {
            
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_FAIL, payload: err})
        }
    };
}
