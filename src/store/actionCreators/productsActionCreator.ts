import { getCategory, getOptions } from './../../helpers';
import { FilterActionsEnum } from './../reducers/filterReducer/filterTypes';
import { loadItems } from './filterActionCreators';
import {
  ProductsActionsType,
  ProductAction,
  IProduct
} from './../reducers/productsReducers/ProductsTypes';
import { Dispatch } from 'redux';
import axios from 'axios';
import { FilterAction } from '../reducers/filterReducer/filterTypes';

type CommonAction = ProductAction | FilterAction
export const fetchProducts = () => {

    return async(dispatch: Dispatch<CommonAction>) => {
        dispatch({type: ProductsActionsType.FETCH_PRODUCTS_START})
        try {
            const {data} = await  axios.get<IProduct[]>('https://fakestoreapi.com/products/')
            data.map(item=> {
                item.quantity = 1
                return item
            })
            console.log(data)
            const options = getOptions(data)
            const category = getCategory(options)
            
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_SUCCESS, payload:data}) 
            dispatch({type :FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS, payload:{
                data, category
            }})
        }
        catch(err) {
            
            dispatch({type:ProductsActionsType.FETCH_PRODUCTS_FAIL, payload: err})
        }
    };
}
