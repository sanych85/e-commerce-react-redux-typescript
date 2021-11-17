import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import PaginationItem from './PaginationItem';

interface Ipagination {
    currentPage:number
    showPaginationItems:(item:number)=>void 
}

const Pagination:React.FC<Ipagination> = ({showPaginationItems,currentPage}) => {
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
                return <PaginationItem key = {item} item = {item} showPaginationItems ={showPaginationItems} currentPage = {currentPage}>{item}</PaginationItem>
            })}
        </PaginationWrapper>
    )
}

export default Pagination

const PaginationWrapper = styled.section `
display: grid;
grid-auto-columns: min-content;
grid-auto-flow: column;
gap: 0.5rem;
margin: 1rem 0rem;
`





