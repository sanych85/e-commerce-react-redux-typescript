
import { IProduct } from './../productsReducers/ProductsTypes';

export interface IFilter {
  products: IProduct[];
  filteredProducts: IProduct[];
  filters: {
    text: string;
    category: any;
    minPrice: number;
    maxPrice: number;
   
  };

}

export interface IFilterItems {
    text: string;
    category: any;
    minPrice: number;
    maxPrice: number;
}

export enum FilterActionsEnum {
    SUCCESS_LOAD_FILTER_ITEMS = ' SUCCESS_LOAD_FILTER_ITEMS',
    FILTER_ITEMS = 'FILTER_ITEMS',
  }

export interface IFilterPayload {
  variant: string;
  value: any;
  products: IProduct[];
}

export interface FilterItemsAction {
  type: FilterActionsEnum.FILTER_ITEMS 
  payload: IFilterPayload 
}



export interface LoadDataAction {
    type:FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS,
    payload: {
        data:IProduct[],
        category: any
    }
}

export type FilterAction = FilterItemsAction | LoadDataAction 