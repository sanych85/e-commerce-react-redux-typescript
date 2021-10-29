import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SvgWrapper } from '.';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const HeaderCart = () => {
  const quantity = useSelector<RootState, number>(
    (state) => state.cart.totalQuantity
  );
  
  return (
    <StyledHeaderCart>
      <Link to = "/cart" className = {quantity<1 ? "notActive": ""}>
        <SvgWrapper type="svgWithLabel" content={quantity}>
          <AiOutlineShoppingCart />
        </SvgWrapper>
      </Link>
    </StyledHeaderCart>
  );
};

export default HeaderCart;

const StyledHeaderCart = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  .notActive {
    pointer-events:none
  }
`;
