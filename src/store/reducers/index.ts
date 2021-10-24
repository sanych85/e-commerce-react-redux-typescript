import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers/productsReducer";

export const rootReducer = combineReducers({ 
    products: productsReducer
})