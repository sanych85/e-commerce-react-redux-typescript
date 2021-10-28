import { IProduct } from './../reducers/productsReducers/ProductsTypes';
import { CartActionsType } from './../reducers/cartReducers/cartTypes';

export const addItemToCart = (data:IProduct)=> {
    return {type:CartActionsType.ADD_ITEM_TO_CART, payload: data}
}
export const removeItemFromCart = (data:IProduct)=> {
    return {type:CartActionsType.DELETE_ITEM_FROM_CART, payload: data}
}