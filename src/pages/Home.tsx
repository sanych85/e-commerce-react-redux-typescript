import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading, { HeadingTypes } from '../components/Heading';
import { fetchProducts } from '../store/actionCreators/productsActionCreator';
import { ProductsActionsType } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import ProductsList from '../components/ProductsList';
import styled from 'styled-components';
import LeftAside from '../components/LeftAside';
import { Spinner } from '../components';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
const Home = () => {
  // const products = useSelector<RootState, IProduct[]>(
  //   (state) => state.products.products
  // );
  const filteredProducts = useSelector<RootState, IProduct[]>(
    (state) => state.filter.filteredProducts
  );
  const sortDirection = useSelector<RootState, string>(
    (state) => state.filter.sortDirection
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.products.loading
  );
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [paginatedItems, setPaginatedItems] = useState<IProduct[]>(filteredProducts) 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(()=> {
    setPaginatedItems(filteredProducts) 
  },[filteredProducts,sortDirection])
  const itemsQuantityOnPage = 6
const pageQuantity = Math.round(filteredProducts.length/itemsQuantityOnPage)
console.log("filteredProducts",filteredProducts)
console.log( "pageQuantity",pageQuantity)

const paginationItems = Array.from({length: pageQuantity}, (v, k) => k+1) 

const showPaginationItems = (item:number)=> {
    const itemsAfterPagination =  filteredProducts.filter((product, idx)=> {
      if(idx>=(item-1)*itemsQuantityOnPage && idx<item*itemsQuantityOnPage) {
        return product
      }
      else return false 
    })

    setPaginatedItems(itemsAfterPagination)
    setCurrentPage(item)

   
}
console.log("paginatedItems", paginatedItems)
  return (
    <Main>
      <LeftAside />
      <InfoSection>
        {loading ? (
          <Spinner />
        ) : filteredProducts.length > 0 ? (
          <>
            <Sorting />
            <Pagination showPaginationItems = {showPaginationItems} currentPage = {currentPage}/>
            <ProductsList
              sorts={sortDirection}
              products={paginatedItems}
              loading={loading}
            />
          </>
        ) : (
          <h2>There are no products for your request</h2>
        )}
      </InfoSection>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-items: center;
  align-items: center;
`;

const InfoSection = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
