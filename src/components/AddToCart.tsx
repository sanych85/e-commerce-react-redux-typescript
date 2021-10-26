import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '.';
import { handleCart } from '../store/actionCreators/cartActionsCreators';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';

const AddToCart:React.FC<IProduct> = (product) => {
  const [showQuantityItems, setShowQuantityItems]= useState<boolean>(false)
  const dispatch = useDispatch()
  const addToCart = () => {
    
    dispatch(handleCart(product))
  };
 
  return (

    <div>
      <Button
        color="white"
        bgColor="#3b3b6c"
        hoverColor="#3b3b6c"
        hoverBgColor="white"
        onClick={addToCart}>
        add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
