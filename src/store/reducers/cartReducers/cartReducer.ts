import { IProduct } from './../productsReducers/ProductsTypes';
import {
  addNewItem,
  deleteItem,
  calculateCartQuantity,
  calculateTotalPrice,
} from '../../../helpers';
import { ICart, ICartAction, CartActionsType } from './cartTypes';

export const initialState: ICart = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (
  state = initialState,
  action: ICartAction
): ICart => {
  switch (action.type) {
    case CartActionsType.ADD_ITEM_TO_CART: {
      const findItem = state.products.find(
        (item: IProduct) => item.id === action.payload.id
      );
      const newItem = addNewItem(state.products, action.payload);
      console.log(newItem);
      if (findItem) {
        return {
          ...state,
          products: newItem,
          totalQuantity: calculateCartQuantity(newItem),
          totalPrice: calculateTotalPrice(newItem)
        };
      } else {
        console.log('in else');
        const newArray = [...state.products, action.payload];
        return {
          ...state,
          products: newArray,
          totalQuantity: calculateCartQuantity(newArray),
          totalPrice:calculateTotalPrice(newArray)
        };
      }
    }
    case CartActionsType.DELETE_ITEM_FROM_CART: {
      const newItem = deleteItem(state.products, action.payload);
      return {
        ...state,
        products: newItem,
        totalQuantity: calculateCartQuantity(newItem),
        totalPrice: calculateTotalPrice(newItem)
      };

      // filter((item:IProduct):IProduct | null  => {
      //     if(item.id===action.payload.id ) {
      //         if(item && item.quantity&& item.quantity > 1) {
      //             return {
      //                 ...item, quantity: item && item.quantity && item.quantity-1
      //             }
      //         }
      //         else {
      //             return null
      //         }

      //     }
      //     else {
      //         return item
      //     }
      // })
    }
    default:
      return state;
  }
};
