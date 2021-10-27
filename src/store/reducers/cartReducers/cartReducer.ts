import { IProduct } from './../productsReducers/ProductsTypes';
import { changeCart } from '../../../helpers';
import { ICart, ICartAction, CartActionsType } from './cartTypes';



export const initialState:ICart=  {
cart: [],

}

export const cartReducer = (state=initialState, action:ICartAction)=> {
    switch(action.type) {
        case CartActionsType.ADD_ITEM_TO_CART: {
            const findItem = state.cart.find((item:IProduct) => item.id === action.payload.id);
            if(findItem) {
                return {
                    ...state, cart: state.cart.map((item:IProduct)=> {
                        if(item===action.payload) {
                            return {
                                ...item, quantity: item.quantity+1
                            }
                        }
                        else {
                            return item
                        }
                    })
                }
            }

            else {
                return {
                    ...state, cart: [...state.cart, action.payload]
                }
            }
            // return {
            //     // ...state, cart: [...state.cart, changeCart(state.cart, action.payload)] 
            //     ...state, cart: state.cart
            // }
        }
      default: return state
    }
}