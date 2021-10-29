import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from '../components/CartItem';

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
    <>
    {quantity ? <StyledMain>
      <StyledUl>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => <CartItem key={item.id} {...item} />)}
      </StyledUl>
       <WrapperCardInfo>
         <Wrapper><StyledSummary>Summary</StyledSummary></Wrapper>
          <Wrapper><Quantity>{quantity}</Quantity> </Wrapper>
          <Wrapper><TotalPrice>{totalPrice.toFixed(2)}$</TotalPrice> </Wrapper>
       </WrapperCardInfo>
    </StyledMain>: <CartIsEmpty>Your cart is empty</CartIsEmpty> }
    
  </>
  );
};

export default Cart;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  width: 100vw;
 
  justify-content: center;
  margin: 0 auto;
`;

const StyledUl = styled.ul `
margin: 0 auto;
width: 70%;
padding-left: 0px;

`

const WrapperCardInfo = styled.div `
display: grid;
grid-template-columns: 7fr 2fr 2fr 1fr;
align-items: center;
justify-content: center;
margin: 1rem auto;
  width: 70%;
`
const Wrapper =styled.div `
  display: grid;
  align-items: center;
  justify-content: center;

  /* &:nth-child(1) {
    grid-column: 2 / 3
  }
  &:nth-child(2) {
    grid-column: 3 / 4
  } */

`

const Quantity = styled.span `
  font-size: 1.3rem;
`

const TotalPrice = styled.span `
  font-size: 1.3rem;
`
const StyledSummary = styled.span `
  font-size: 1.3rem;
`

const CartIsEmpty = styled.section `
display: flex;
justify-content: center;
align-items: center;
font-size: 2.3rem
`
