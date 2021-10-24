import { IProducts, ProductAction,ProductsActionsType } from "./ProductsTypes"

const initialState:IProducts = {
    products:[],
    loading: false,
    error: ''
}


export const  productsReducer = (state=initialState, action:ProductAction):IProducts=> {
    switch(action.type) {
        case ProductsActionsType.FETCH_PRODUCTS_START:  {
            return  {
                ...state, loading: true
            }
        }
        case ProductsActionsType.FETCH_PRODUCTS_SUCCESS:  {
            return  {
                ...state, loading: false, products: action.payload  
            }
        }
        case ProductsActionsType.FETCH_PRODUCTS_FAIL:  {
            return  {
                ...state, loading: false, error: action.payload   
            }
        }
        default: return state
    }
}