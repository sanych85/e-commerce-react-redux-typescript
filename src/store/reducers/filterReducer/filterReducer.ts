import { IProduct } from './../productsReducers/ProductsTypes';
import { bindActionCreators } from 'redux';
import { FilterAction, FilterActionsEnum, IFilter } from './filterTypes';
import { store } from '../../store';

const ititialState: IFilter = {
  products: [],
  filteredProducts: [],
  filters: {
    text: '',
    category: {

    },
    minPrice: 0,
    maxPrice: 200,
   
  },
 
};

export const filterReducer = (state = ititialState, action: FilterAction) => {
    
  switch (action.type) {
    case FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS: {
      return {
        ...state, filteredProducts: action.payload.data, filters: {
          ...state.filters, category:action.payload.category
        }

      }
    }
    case FilterActionsEnum.FILTER_ITEMS: {
      console.log('Action paylaod', action.payload.value)
        let updatedFilters = {...state.filters}; 
      if (action.payload.variant === 'text') {
         updatedFilters = {
            ...state.filters,
            text:action.payload.value 
          ,
        };
        console.log(updatedFilters, "updated filters")

      } else if (action.payload.variant === 'category') {
        console.log("value", action.payload.value)
        console.log("type", state.filters.category[action.payload.value])
        console.log("state.filters.category", state.filters.category)
        updatedFilters = {
            
                ...state.filters, category: {
                    ...state.filters.category, [action.payload.value]:!state.filters.category[action.payload.value] 
                }
            
        }
        
      }
      console.log("updated filters", updatedFilters)
      
      return  {
        ...state, filters: updatedFilters  
          , filteredProducts: action.payload.products.filter((product:IProduct):IProduct[] | boolean  => {
        
            return product.title.toLowerCase().startsWith(action.payload.value)
        }),  
      
    }

   
  }
  default: return state;
};
}