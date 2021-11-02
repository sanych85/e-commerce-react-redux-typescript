import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading, { HeadingTypes } from '../components/Heading'
import { fetchProducts } from '../store/actionCreators/productsActionCreator'
import { ProductsActionsType } from '../store/reducers/productsReducers/ProductsTypes'
import { RootState } from '../store/store'
import {IProduct} from "../store/reducers/productsReducers/ProductsTypes"
import ProductsList from '../components/ProductsList'
import styled from 'styled-components';
import LeftAside from '../components/LeftAside'
const Home = () => {
    const products = useSelector<RootState, IProduct[]>(state=>state.products.products)
    const filteredProducts = useSelector<RootState, IProduct[]>(state=>state.filter.filteredProducts)
    const loading = useSelector<RootState, boolean>(state=>state.products.loading)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])
    return (
        <Main>
            <LeftAside/> 
            <ProductsList products = {filteredProducts} loading= {loading}/> 
            <div></div>
        </Main>
    )
}

export default Home

const Main = styled.main `
display: grid;
grid-template-columns: 1fr 5fr 1fr;
`
