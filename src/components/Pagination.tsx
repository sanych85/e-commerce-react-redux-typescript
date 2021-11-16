import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';

const Pagination = () => {
const filteredProducts = useSelector<RootState, IProduct[]>(
        (state) => state.filter.filteredProducts
);
const itemsQuantityOnPage = 6
const pageQuantity = Math.round(filteredProducts.length/itemsQuantityOnPage)
console.log( "pageQuantity",pageQuantity)

const paginationItems = Array.from({length: pageQuantity}, (v, k) => k+1) 
console.log(paginationItems)
    return (
        <PaginationWrapper>
            {paginationItems.map(item=> {
                return <PaginationItem key = {item}>{item}</PaginationItem>
            })}
        </PaginationWrapper>
    )
}

export default Pagination

const PaginationWrapper = styled.section `
display: grid;
grid-auto-columns: min-content;
grid-auto-flow: column;
`


const PaginationItem = styled.div `

border: 1px solid #000;
`


