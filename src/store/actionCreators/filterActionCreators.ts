import { IProduct } from './../reducers/productsReducers/ProductsTypes';
import { IFilterPayload, FilterActionsEnum, SortEnum, sortPayload, Filter, SortingType } from './../reducers/filterReducer/filterTypes';


export const filterItems = (data: IFilterPayload)=> {
    return {type: FilterActionsEnum.FILTER_ITEMS, payload:data}
}

export const loadItems = (data:IProduct[])=> {
    return {type:FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS, payload:data}
}

export const clearFilters =(data:IProduct[])=> {
    return {type:FilterActionsEnum.CLEAR_FILTERS, payload:data}
}

export const sortItems =(type:SortingType )=> {
 return {type:FilterActionsEnum.SORT_ITEMS, payload:type}
}