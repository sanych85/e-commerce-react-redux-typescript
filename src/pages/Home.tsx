import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Heading, { HeadingTypes } from '../components/Heading'
import { fetchProducts } from '../store/actionCreators/productsActionCreator'
import { ProductsActionsType } from '../store/reducers/productsReducers/ProductsTypes'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])
    return (
        <div>
            <Heading type = {HeadingTypes.h1} color = "violet">fsdfsdf</Heading>
        </div>
    )
}

export default Home
