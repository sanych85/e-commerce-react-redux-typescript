
import { IProduct } from './../productsReducers/ProductsTypes';



export interface IFilter {
  products: [];
  filteredProducts: [];
  filters: {
      text:"",
      category: []
      minPrice: number
      maxPrice:number 

  };
} 

export interface IFilterPayload {
   type:string,
   value:any
}


export enum FilterActionsEnum {
    FILTER_ITEMS = "FILTER_ITEMS"
}

export interface FilterAction {
    type: FilterActionsEnum.FILTER_ITEMS
    payload:IFilterPayload
}
