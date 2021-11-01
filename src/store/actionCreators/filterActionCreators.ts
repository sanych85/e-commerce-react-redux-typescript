import { IFilterPayload } from './../reducers/filterReducer/filterTypes';


export const filterItems = (data: IFilterPayload)=> {
    return {type: "FILTER_ITEMS", payload:data}
}