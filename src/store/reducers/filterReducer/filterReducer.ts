import { IProduct } from './../productsReducers/ProductsTypes';
import { bindActionCreators } from 'redux';
import { FilterAction, FilterActionsEnum, IFilter } from './filterTypes';
import { store } from '../../store';

const ititialState: IFilter = {
  products: [],
  filteredProducts: [],
  filters: {
    text: '',
    category: {},
    minPrice: 0,
    maxPrice: 200,
  },
};

export const filterReducer = (state = ititialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS: {
      return {
        ...state,
        filteredProducts: action.payload.data,
        filters: {
          ...state.filters,
          category: action.payload.category,
        },
      };
    }
    case FilterActionsEnum.FILTER_ITEMS: {
      console.log('Action paylaod', action.payload.value);
      let updatedFilters = { ...state.filters };
      if (action.payload.variant === 'text') {
        updatedFilters = {
          ...state.filters,
          text: action.payload.value,
        };
        console.log(updatedFilters, 'updated filters');
      } else if (action.payload.variant === 'category') {
        updatedFilters = {
          ...state.filters,
          category: {
            ...state.filters.category,
            [action.payload.value]:
              !state.filters.category[action.payload.value],
          },
        };
      }

   
      const updatedState = () => {
        const filteredCategories:string[] = Object.entries(updatedFilters.category).filter(
          (item) => item[1] 
        ).map(item=>item[0]);
     
      
        let filteredProducts = action.payload.products.filter(
          (product: IProduct): IProduct | boolean   => {
            console.log(action.payload.value)
            if(updatedFilters.text!=="")  {
              
              return product.title.toLowerCase().startsWith(action.payload.value);
            }
            else {
            
              return product
            }
            
          }
        );
        console.log(filteredProducts, "filteredProducts after text")
        let filteredArray:any = []
          if(filteredCategories.length>0) {
            console.log("in if")
            
           filteredCategories.forEach((category:string)=> {
              const filtersByCategoryItems = filteredProducts.filter(item=>item.category===category)
              console.log(filtersByCategoryItems, "filteredProducts")
              filteredArray = [...filteredArray, ...filtersByCategoryItems]
             console.log(filteredArray) 
             
           })
           
          }else {
            console.log("in else")
            filteredArray  = filteredProducts 
          }
   
          console.log(filteredArray, "final filter") 
        return filteredArray
        
      };
     
      // console.log(updatedState(), "glbal update state")
      
 
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: updatedState()
      };
    }
    default:
      return state;
  }
};
