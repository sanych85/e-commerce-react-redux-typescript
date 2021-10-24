import React from 'react';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import styled from 'styled-components';

const ProductItem: React.FC<IProduct> = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <StyledLi>
      <StyledFigure>
        <StyledImage src={image}></StyledImage>
        <StyledFigcaption>{title}</StyledFigcaption>
      </StyledFigure>
      <Description>{description}</Description>

      <AdditionalInfo>
        <Category>{category}</Category>
        <Price>{price}$</Price>
        <Rating>{rating.rate}</Rating>
        <Count>{rating.count}</Count>
      </AdditionalInfo>
    </StyledLi>
  );
};

export default ProductItem;

const StyledLi = styled.li`
  list-style: none;
  gap: 1rem;
  background: #dee7ed;

  border-radius: 10px;
  box-shadow: 7px 5px 5px #dfd7da;
`;

const StyledFigure = styled.figure``;

const StyledFigcaption = styled.figcaption`
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 350px;
  height: 400px;
  border-radius: 10px;
`;

const Description = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-content: space-around;
  
`;

const Price = styled.span``;

const Category = styled.span``;

const Rating = styled.span``;

const Count = styled.span``;
