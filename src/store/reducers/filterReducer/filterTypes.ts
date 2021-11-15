
import { IProduct } from './../productsReducers/ProductsTypes';
export type Filter = 'category' | 'text' | 'price';
export type SortingType = "price" |   "rate" | "count" | "name" 
export type SortDirectionType = "up" | "down"
export interface IFilter {
  products: IProduct[];
  filteredProducts: IProduct[];
  filters: {
    text: string;
    category: any;
    minPrice: number;
    maxPrice: number;
    
   
  };
  sortDirection: string
  sortBy:SortingType
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
    CLEAR_FILTERS= "CLEAR_FILTERS",
    SORT_ITEMS= "SORT_ITEMS"
  }

export enum SortEnum {
  price = "price",
  rate ="rate",
  name = "name",
  count= "count"
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

export interface ClearFiltersAction {
  type: FilterActionsEnum.CLEAR_FILTERS;
  payload: IProduct[]
}
export type sortPayload = SortEnum.name | SortEnum.price | SortEnum.rate | SortEnum.count  
export interface SortItems {
  type: FilterActionsEnum.SORT_ITEMS
  payload: sortPayload
}

export type FilterAction = FilterItemsAction | LoadDataAction  | ClearFiltersAction | SortItems 