import React from 'react';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import styled from 'styled-components';
const CartItem: React.FC<IProduct> = ({ quantity, price, image, title }) => {
  return (
    <StyledLi>
      <StyledFigure>
        <StyledImg src={image}></StyledImg>
        <StyledFigCaption>{title}</StyledFigCaption>
      </StyledFigure>
      <Quantity>{quantity}</Quantity>
      {quantity &&  <Price>{quantity*price}</Price>}
    </StyledLi>
  );
};

export default CartItem;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
`;

const StyledFigure = styled.figure`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
`;

const StyledFigCaption = styled.figcaption`
`;

const StyledImg = styled.img`
width: 50px;
height: 50px;

`;

const Quantity = styled.span `

`
const Price = styled.span `

`
