
export enum ProductsActionsType {
    FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL" 
}

export interface IProduct {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
        rate:number,
        count:number 
    }
    title: string
}

export  interface IProducts {
    products: any[]
    loading: boolean; 
    error: unknown
}

export  interface IFetchProductsAction {
    type: ProductsActionsType.FETCH_PRODUCTS_START
    
   
}
export  interface IFetchProductsSuccessAction {
    type: ProductsActionsType.FETCH_PRODUCTS_SUCCESS
    payload:any[]
}
export  interface IFetchProductsFailAction {
    type: ProductsActionsType.FETCH_PRODUCTS_FAIL
    payload: unknown
}

export type  ProductAction  = IFetchProductsAction | IFetchProductsSuccessAction | IFetchProductsFailAction