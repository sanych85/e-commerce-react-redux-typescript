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
    case CartActionsType.INCREASE_ITEM_IN_CART: {
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
          totalPrice: calculateTotalPrice(newItem),
        };
      } else {
        console.log('in else');
        const newArray = [...state.products, action.payload];
        return {
          ...state,
          products: newArray,
          totalQuantity: calculateCartQuantity(newArray),
          totalPrice: calculateTotalPrice(newArray),
        };
      }
    }
    case CartActionsType.DECREASE_ITEM_IN_CART: {
      const newItem = deleteItem(state.products, action.payload);
      return {
        ...state,
        products: newItem,
        totalQuantity: calculateCartQuantity(newItem),
        totalPrice: calculateTotalPrice(newItem),
      };
    }

    case CartActionsType.DELETE_ITEM_FROM_CART: {
      console.log('action.payload', action.payload);
      const newItem = state.products.filter(
        (item: IProduct) => item.id !== action.payload.id
      )
      return {
        ...state,
        products: newItem,
        totalQuantity: calculateCartQuantity(newItem),
        totalPrice: calculateTotalPrice(newItem),
      };
    }
    default:
      return state;
  }
};
