import { IProduct } from './../reducers/productsReducers/ProductsTypes';
import { CartActionsType } from './../reducers/cartReducers/cartTypes';

export const increaseCountInCart= (data:IProduct)=> {
    return {type:CartActionsType.INCREASE_ITEM_IN_CART, payload: data}
}
export const decreaseCountInCart = (data:IProduct)=> {
    return {type:CartActionsType.DECREASE_ITEM_IN_CART, payload: data}
}

export const removeItemFromCart = (data:IProduct)=> {
    return {type:CartActionsType.DELETE_ITEM_FROM_CART, payload:data}
}