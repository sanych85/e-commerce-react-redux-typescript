import React from 'react'
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes'
import ProductItem from './ProductItem'
import styled from 'styled-components';


export interface IProductList {
   products: IProduct[]
   loading: boolean
}


const ProductsList:React.FC<IProductList> = ({products, loading}) => { 
    console.log(products)
    if(loading) {
        return <div>Loading</div>
    }
    return (
        <StyledUl> 
            {products.map(product=> <ProductItem key = {product.id} {...product}></ProductItem>)}
        </StyledUl>
    )
}

export default ProductsList

const StyledUl = styled.ul `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`
