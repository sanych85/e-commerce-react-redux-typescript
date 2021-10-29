import React from 'react';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import styled from 'styled-components';
import { AddToCart } from '.';
import { useDispatch } from 'react-redux';
import {
  decreaseCountInCart,
  increaseCountInCart,
  removeItemFromCart,
  
} from '../store/actionCreators/cartActionsCreators';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import {BsTrash} from "react-icons/bs"

const CartItem: React.FC<IProduct> = (product) => {
  const { quantity, price, image, title, id } = product;

  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(increaseCountInCart(product));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseCountInCart(product));
  };
  const removeFromCart = () => {
    dispatch(removeItemFromCart(product));
  };


  return (
    <StyledLi>
      <StyledFigure>
        <StyledImg src={image}></StyledImg>
        <StyledFigCaption>{title}</StyledFigCaption>
      </StyledFigure>
      <Wrapper>
        <StyledSvgWrapper>
          <AiFillMinusSquare onClick={decreaseQuantity}></AiFillMinusSquare>{' '}
        </StyledSvgWrapper>
        <Quantity>{quantity}</Quantity>
        <StyledSvgWrapper>
          <AiFillPlusSquare onClick={increaseQuantity}></AiFillPlusSquare>
        </StyledSvgWrapper>
      </Wrapper>
      <Wrapper>{quantity && <Price>{quantity * price}$</Price>}</Wrapper>
      <StyledSvgWrapper>
          <BsTrash onClick={removeFromCart}></BsTrash>
        </StyledSvgWrapper>
    </StyledLi>
  );
};

export default CartItem;

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 7fr 2fr 2fr 1fr;
  border-top: 1px solid #00000018;;
  /* border: 1px solid #00000018; */
  &:last-child {
    border-bottom: 1px solid #00000018;
  }
  align-items: center;
  justify-content: center;
`;

const StyledFigure = styled.figure`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const StyledFigCaption = styled.figcaption``;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
  text-align: center;
`;
const Quantity = styled.span`
padding: 10px;
font-size: 1.2rem;
`;
const Price = styled.span`
font-size: 1.2rem;`;

const StyledSvgWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 32px;
  height: 32px;
 
  svg {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
    &:hover {
      color: red;
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;
