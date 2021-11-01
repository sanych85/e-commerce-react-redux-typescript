import { FilterAction, FilterActionsEnum, IFilter } from './filterTypes';

 

 const ititialState:IFilter= {
    products: [],
    filteredProducts:[],
    filters: {
        text: "",
        category: [],
        minPrice: 0,
        maxPrice:200  
  
    } 
}

export const filterReducer = (state=ititialState, action:FilterAction) => {

    switch(action.type) {
        case FilterActionsEnum.FILTER_ITEMS: {
            
            if(action.payload.type === "text") {
               return {
                   ...state, filters: {
                       ...state.filters, text: action.payload.value
                   }
               } 
            }

            if(action.payload.type ==="category") {
                
            }
            return {
                ...state
            }
        }
        default: return state
    }
}