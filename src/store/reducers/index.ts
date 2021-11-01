import { filterReducer } from './filterReducer/filterReducer';
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers/cartReducer";
import { productsReducer } from "./productsReducers/productsReducer";

export const rootReducer = combineReducers({ 
    products: productsReducer,
    cart: cartReducer,
    filter: filterReducer
})