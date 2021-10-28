import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { ICart } from '../store/reducers/cartReducers/cartTypes';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';

const Cart = () => {
  const cart = useSelector<RootState, IProduct[]>(
    (state) => state.cart.products
  );
  const quantity = useSelector<RootState, number>(
    (state) => state.cart.totalQuantity
  );
  const totalPrice = useSelector<RootState, number>(
    (state) => state.cart.totalPrice
  );
  return (
    <StyledMain>
      <StyledUl>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => <CartItem key={item.id} {...item} />)}
      </StyledUl>
    </StyledMain>
  );
};

export default Cart;

const StyledMain = styled.main`
  display: grid;
  min-height: calc(100vh - 100px);
 
  justify-content: center;
`;

const StyledUl = styled.ul `
width: 70%;
`
