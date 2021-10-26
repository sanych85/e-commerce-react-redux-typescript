import { IProduct } from './../productsReducers/ProductsTypes';
export enum CartActionsType {
    ADD_ITEM_TO_CART= "ADD_ITEM_TO_CART" 
}

export interface ICart { 
    cart: []
}


export interface ICartAction {
    type: CartActionsType.ADD_ITEM_TO_CART,
    payload: IProduct
}