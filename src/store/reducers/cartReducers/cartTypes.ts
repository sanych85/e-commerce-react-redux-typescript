import { IProduct } from './../productsReducers/ProductsTypes';
export enum CartActionsType {
    ADD_ITEM_TO_CART= "ADD_ITEM_TO_CART",
    DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART"
}

export interface ICart { 
    products: IProduct[] ,
    totalPrice: number,
    totalQuantity: number
    
}


export interface ICartAction {
    type: CartActionsType.ADD_ITEM_TO_CART | CartActionsType.DELETE_ITEM_FROM_CART,
    payload: IProduct
}



