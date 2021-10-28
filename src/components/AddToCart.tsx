import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '.';
import {
  addItemToCart,
  removeItemFromCart,
} from '../store/actionCreators/cartActionsCreators';
import { ICart } from '../store/reducers/cartReducers/cartTypes';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
const AddToCart: React.FC<IProduct> = (product) => {
  const [showQuantityItems, setShowQuantityItems] = useState<boolean>(false);
  const cart = useSelector<RootState, ICart>((state) => state.cart);
  const { products } = cart;
  // console.log(product, "product")
  // console.log("products", products)

  const cartItem = products.find((item: IProduct) => item.id === product.id);
  let quantity = 0;
  if (cartItem && cartItem.quantity) {
    quantity = cartItem.quantity;
  }

  console.log(quantity);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  const removeFromCart = () => {
    dispatch(removeItemFromCart(product));
  };

  return (
    <Wrapper>
      {quantity > 0 && (
        <StyledSvgWrapper>
         
          <AiFillMinusSquare onClick = {removeFromCart} ></AiFillMinusSquare>{' '}
        </StyledSvgWrapper>
      )}

      <Button
        color="white"
        bgColor="#3b3b6c"
        hoverColor="#3b3b6c"
        hoverBgColor="white"
        onClick={addToCart}
        disabled={quantity > 0 ? true : false}>
        add to cart
      </Button>
      {quantity > 0 && (
        <StyledSvgWrapper>
          <AiFillPlusSquare onClick = {addToCart}></AiFillPlusSquare>{' '}
        </StyledSvgWrapper>
      )}
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSvgWrapper = styled.div`
  svg {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
    &:hover {
     color:red;
     transform: scale(1.02);
     cursor: pointer
}
  }
`;
