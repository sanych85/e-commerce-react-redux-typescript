import { IProduct } from './../reducers/productsReducers/ProductsTypes';
import { IFilterPayload, FilterActionsEnum } from './../reducers/filterReducer/filterTypes';


export const filterItems = (data: IFilterPayload)=> {
    return {type: FilterActionsEnum.FILTER_ITEMS, payload:data}
}

export const loadItems = (data:IProduct[])=> {
    return {type:FilterActionsEnum.SUCCESS_LOAD_FILTER_ITEMS, payload:data}
}