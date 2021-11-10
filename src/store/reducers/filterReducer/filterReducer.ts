import { getCategory } from '../../../helpers';
import { IProduct } from './../productsReducers/ProductsTypes';

import { FilterAction, FilterActionsEnum, IFilter } from './filterTypes';

const ititialState: IFilter = {
  products: [],
  filteredProducts: [],
  filters: {
    text: '',
    category: {},
    minPrice: 0,
    maxPrice: 1000,
  },
};

export const filterReducer = (state = ititialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS: {
      return {
        ...state,
        products: action.payload.data,
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
        console.log('in if');
        updatedFilters = {
          ...state.filters,
          text: action.payload.value,
        };
        console.log(updatedFilters, 'updated filters');
      } else if (action.payload.variant === 'category') {
        console.log('inelse ');
        updatedFilters = {
          ...state.filters,
          category: {
            ...state.filters.category,
            [action.payload.value]:
              !state.filters.category[action.payload.value],
          },
        };
      } else if (action.payload.variant === 'price') {
        console.log(action.payload, 'action payload in price');
        updatedFilters = {
          ...state.filters,
          minPrice: action.payload.value[0],
          maxPrice: action.payload.value[1],
        };
      }

      const updatedState = (products: IProduct[]) => {
        const filteredCategories: string[] = Object.entries(
          updatedFilters.category
        )
          .filter((item) => item[1])
          .map((item) => item[0]);

        let filteredProducts = products
          .filter((product: IProduct): IProduct | boolean => {
            console.log(action.payload.value);
            if (updatedFilters.text !== '') {
              return product.title
                .toLowerCase()
                .startsWith(updatedFilters.text);
            } else {
              return product;
            }
          })
          .filter((elem: IProduct) => {
            return (
              elem.price <= state.filters.maxPrice &&
              elem.price >= state.filters.minPrice
            );
          });

        console.log(filteredProducts, 'filteredProducts after text');
        let filteredArray: any = [];
        if (filteredCategories.length > 0) {
          console.log('in if');

          filteredCategories.forEach((category: string) => {
            const filtersByCategoryItems = filteredProducts.filter(
              (item: IProduct) => item.category === category
            );
            console.log(filteredProducts, 'filteredProducts in category');
            filteredArray = [...filteredArray, ...filtersByCategoryItems];
          });
          filteredProducts = filteredArray;
          console.log(filteredProducts, 'filtered after categories');
        }

        console.log(filteredArray, 'final filter');
        return filteredProducts;
      };

      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: updatedState(state.products),
      };
    }
    case FilterActionsEnum.CLEAR_FILTERS: {
      const category = [...new Set(action.payload.map((item: IProduct): string => item.category)),
      ].reduce((total:any, item:string):any=>{
       
        total[item]=false
        return total
        
      }, {})
      console.log(category) 
      return {
        ...state,
        filteredProducts: action.payload,
        filters: {
          text: '',
          category: category,
          minPrice: 0,
          maxPrice: 200,
        },
      };
    }
    default:
      return state;
  }
};
