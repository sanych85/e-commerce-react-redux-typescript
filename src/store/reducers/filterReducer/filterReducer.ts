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
        console.log("in if")
        updatedFilters = {
          ...state.filters,
          text: action.payload.value,
        };
        console.log(updatedFilters, 'updated filters');
      
      } else if (action.payload.variant === 'category') {
        console.log("inelse ")
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
              
              return product.title.toLowerCase().startsWith(updatedFilters.text);
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
              const filtersByCategoryItems = filteredProducts.filter((item:IProduct)=>item.category===category)
              console.log(filtersByCategoryItems, "filteredProducts")
              filteredArray = [...filteredArray, ...filtersByCategoryItems]
             console.log(filteredArray) 
             
           })
           filteredArray.filter((elem:IProduct)=>elem.price <= state.filters.maxPrice)
           console.log(filteredArray, "filtered after price")
           
          }else {
            console.log("in else")
            filteredArray  = filteredProducts.filter((elem:IProduct)=>elem.price <= state.filters.maxPrice)
          }
   
          console.log(filteredArray, "final filter") 
        return filteredArray
        
      };
     
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
