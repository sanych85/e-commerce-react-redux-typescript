import { changeCart } from '../../../helpers';
import { ICart, ICartAction, CartActionsType } from './cartTypes';



export const initialState:ICart=  {
cart: [],

}

export const cartReducer = (state=initialState, action:ICartAction)=> {
    switch(action.type) {
        case CartActionsType.ADD_ITEM_TO_CART: {
            return {
                ...state, cart: [...state.cart, changeCart(state.cart, action.payload)] 
            }
        }
      default: return state
    }
}