import { IProduct } from './../productsReducers/ProductsTypes';
export enum CartActionsType {
    INCREASE_ITEM_IN_CART= "INCREASE_ITEM_IN_CART",
    DECREASE_ITEM_IN_CART = "DECREASE_ITEM_IN_CART",
    DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART"

}

export interface ICart { 
    products: IProduct[] ,
    totalPrice: number,
    totalQuantity: number
    
}


export interface ICartAction {
    type: CartActionsType.INCREASE_ITEM_IN_CART | CartActionsType.DECREASE_ITEM_IN_CART | CartActionsType.DELETE_ITEM_FROM_CART,
    payload: IProduct
}



