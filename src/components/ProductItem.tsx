import React from 'react';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import styled from 'styled-components';
import { MdOutlineStarRate,MdPeopleAlt } from 'react-icons/md';
import { AddToCart } from '.';



const ProductItem: React.FC<IProduct> = (
product) => {

  const {category,
    description,
    image,
    price,
    rating,
    title} = product 
  return (
    <StyledLi>
      <StyledFigure>
        <StyledImage src={image}></StyledImage>
        <StyledFigcaption>{title}</StyledFigcaption>
      </StyledFigure>
      <Description>{description.charAt(0).toUpperCase() + description.slice(1)}</Description>

      <AdditionalInfo>
        <Category>{category}</Category>
        <Price>{price}$</Price>

        <RatingWrapper>
            <Rating>
              {rating.rate}
              <MdOutlineStarRate />
            </Rating>
            <Count>{rating.count} <MdPeopleAlt/></Count>
        </RatingWrapper>
      </AdditionalInfo>
      <AddToCart {...product}/>
      
    </StyledLi>
  );
};

export default ProductItem;

const StyledLi = styled.li`
  display: grid;
  list-style: none;

  background: #dee7ed;
  align-items: end;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  border-radius: 10px;
  box-shadow: 7px 5px 5px #dfd7da;
`;

const StyledFigure = styled.figure`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledFigcaption = styled.figcaption`
  margin-top: 1rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
 
`;

const StyledImage = styled.img`
  width: 270px;
  height: 300px;

  border-radius: 10px;
`;

const Description = styled.p``;

const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-content: space-around;

  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 50%;
    left: -20px;
    color:red;

    transform: translateY(-50%);
  }
  div {
      display: flex;
      align-items: center;
        &:nth-child(2n) {
      justify-content: end;
    }
  }
`;

const Price = styled.div`
  color: #66370b;
  font-size: 1.7rem;
`;

const Category = styled.div`
font-size: 1.5rem;
color:blue;
padding-left: 15px;`;

const RatingWrapper = styled.div `
padding-left: 30px;
`

const Rating = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-right: 2rem;
  
`;

const Count = styled.div`
font-size: 1.2rem;
position: relative;
svg {
    height: 20px;
    width: 20px;
    position: absolute;
    top: 50%;
    left: -22px;
    color:red;

    transform: translateY(-50%);
  }
`;
