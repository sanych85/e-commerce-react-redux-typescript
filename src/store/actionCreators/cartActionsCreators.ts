import { IProduct } from './../reducers/productsReducers/ProductsTypes';
import { CartActionsType } from './../reducers/cartReducers/cartTypes';

export const handleCart = (data:IProduct)=> {
    return {type:CartActionsType.ADD_ITEM_TO_CART, payload: data}
}