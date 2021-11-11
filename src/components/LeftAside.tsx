import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { filterItems, clearFilters } from '../store/actionCreators/filterActionCreators';
import {  getMaxPrice, getOptions } from '../helpers';
import { IFilterItems } from '../store/reducers/filterReducer/filterTypes';
import { Button } from '.';
import {BiSearchAlt2} from "react-icons/bi"
interface StyledInputRange {
  variant?: 'range';
  max?: number;
}

interface IFilterState {
  price: [number, number];
  searchValue: string;
  category: any;
}

export enum Filterscategory {
  category = 'category',
  search = 'search',
  price = 'price',
}

type FilterCategory = [string,boolean] 

export type Filter = 'category' | 'text' | 'price';

const LeftAside: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.products
  );
  // const options = useSelector<RootState, any>(state=>state.filter.filters.category) 
  // console.log("options", options)
  // console.log(Object.entries(options))
  // const { text } = useSelector<RootState, IFilterItems>(
  //   (state) => state.filter.filters
  // );

  const {text,category, minPrice,} = useSelector<RootState,any>(state=>state.filter.filters) 
  console.log('text', text);
  const maxPrice = getMaxPrice(products);
  // const options = getOptions(products);

  const [value, setValue] = useState<[number, number]>([0, maxPrice | 200]);

  const changeInput = (
    e: React.FormEvent<HTMLInputElement>,
    variant: Filter
  ) => {
    if (variant === 'text') {
      const value = e.currentTarget.value;
      dispatch(filterItems({ variant, value, products }));
    } else if (variant === 'category') {
      const value = e.currentTarget.name;
      console.log('value', value);
      dispatch(filterItems({ variant, value, products }));
    }
  };

  const changePrice = (values: any) => {
    const value = values;
    const variant = 'price';
    dispatch(filterItems({ variant, value, products }));
    setValue(values);
  };

  const clearFiltersFields = ()=> {
    dispatch(clearFilters(products))
    setValue([0,maxPrice]); 
  }
  const displayOptions:[string, boolean][] | undefined = Object.entries(category)
  console.log("displayOptions", displayOptions)
  return (
    <AsideWrapper>
      {products && products.length > 0 && maxPrice && Object.keys(category).length > 0 && (
        <StyledAside>
          <StyledFieldset>
            <InputWrapper>
              <Input
                id="search"
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => changeInput(e, 'text')}>
              
                </Input>
                <BiSearchAlt2></BiSearchAlt2>
              <Label htmlFor="search"></Label>
            </InputWrapper>
            <InputWrapper>
              <Legend>Choose category</Legend>
              {displayOptions.map((option, index)=> {
                console.log(option[1])
                return (
                  <CheckboxWrapper key={index}>
                  <Input
                    type="checkbox" 
                     checked = {option[1]}
                    onChange={(e) => changeInput(e, 'category')}
                    name={option[0]}
                    value={option[0]}
                    id={option[0]}
                  />
                  <Label htmlFor={option[0]}>{option[0]}</Label>
                </CheckboxWrapper>
                )
              })}
            </InputWrapper>
            <InputWrapper>
            <Label htmlFor= "price">Filter by price</Label>
              <TwoThumbInputRange
                onChange={changePrice}
                values={value}
                min={0}
                max={+`${maxPrice | 0}`}
              />
            </InputWrapper>
          </StyledFieldset>
          <Button marginTop = "1rem" hoverColor = "white"  hoverBgColor = "#3b3b6c" onClick = {clearFiltersFields}>Clear Filters</Button>
        </StyledAside>
      )}
    </AsideWrapper>
  );
};

export default LeftAside;

const AsideWrapper = styled.aside `
  display: grid;
  align-self: flex-start;
  margin-top: 1rem;
 `

const StyledAside = styled.section`
    display: grid;
   

  /* justify-content: center; */
  .css-j8gyih-TwoThumbInputRange {
    margin-top: 2rem;
    output {
      top: -25px;
      &:nth-child(2) {
        top: 30px;
        &:after {
          border-width: 8px 8px 8px 8px;
          border-color: transparent transparent #1976d2 transparent;
          position: absolute;
          bottom: 24px;
          left: 50%;
        }
      }
    }
  }
`;
const StyledFieldset = styled.fieldset `
padding: 3rem;
`
const InputWrapper = styled.div<StyledInputRange>`
  margin-top: 3rem;
  position: relative;
  &:after,
  &:before {
    content: ${({ variant, max }) => `"${variant === 'range' ? max : ''} "`};
    position: absolute;
    bottom: -10px;
    font-size: 0.9rem;
  }
  &:before {
    content: ${({ variant, max }) => `"${variant === 'range' ? 0 : ''} "`};
    left: 0;
  }
  &:after {
    right: 0;
  }
  svg {
    position: absolute;
    bottom: 6px;
    right: 0;
    transition: all  0.3s ease;
    
  }


`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px ;
  height: ${({type})=>type==='text'?"25px":"20px"};
  &:focus::placeholder {
    color: transparent
  }
  &:focus + svg {
    opacity: 0;
    border: 1px;
  }
`;

const Label = styled.label``;


const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-bottom: 0.5rem;
`;

const Legend = styled.legend`
  margin-bottom: 0.5rem;
`;
