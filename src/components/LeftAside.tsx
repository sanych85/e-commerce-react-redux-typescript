import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { filterItems } from '../store/actionCreators/filterActionCreators';
import { getCategory, getMaxPrice, getOptions } from '../helpers';
import { IFilterItems } from '../store/reducers/filterReducer/filterTypes';


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

export type Filter = 'category' | 'text' | 'price';

const LeftAside: React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.products
  );
  const {text} = useSelector<RootState, IFilterItems>(state=>state.filter.filters) 
    console.log("text", text) 
  const maxPrice = getMaxPrice(products)
  const options = getOptions(products) 
  const category = getCategory(options)
  

  const [inputValue, setInputValue] = useState<string>('');
  const [inputState, setInputState] = useState<IFilterState>({
    price: [0, 0],
    searchValue: '',
    category: category,
  });

  

  const [value, setValue] = useState<[number, number]>([0, maxPrice | 200]);


  const changeInput = (e: React.FormEvent<HTMLInputElement>, variant: Filter, 
    ) => {
    // if (type === 'search') {
    //   setInputState({ ...inputState, searchValue: e.currentTarget.value });
    // } else if (type === 'category') {
    //   setInputState({
    //     ...inputState,
    //     category: {
    //       ...inputState.category,
    //       [e.currentTarget.value]: !inputState.category[e.currentTarget.value],
    //     },
    //   });
    // } else if (type === 'price') {
      
    // }
    // setInputValue(e.currentTarget.value);
      
      
      if(variant === "text") {
        const value = e.currentTarget.value
        dispatch(filterItems({variant, value, products}))
      }
      else if(variant ==="category") {
    
        const value = e.currentTarget.name
        console.log("value" , value)
        dispatch(filterItems({variant, value, products})) 
      }

      // else if(variant === "price") {
      //   const value =[]
      //   dispatch(filterItems({variant, value}))
      // }
  
    
    console.log(inputState, "inputState")
    console.log("nowDispatch")
  };


  const changePrice = (values: any) => {
    const value = values
    const variant = "price"
    dispatch(filterItems({variant, value, products}))
    setValue(values);
  };
  return (
    <>
      {products && products.length > 0 && maxPrice && (
        <StyledAside>
          <fieldset>
            <InputWrapper>
              <Input
                id="search"
                type="text"
                placeholder="Search"
                value={text}
                onChange={(e) => changeInput(e, 'text')}></Input>
              <Label htmlFor="search"></Label>
            </InputWrapper>
            <InputWrapper>
              <Legend>Choose category</Legend>
              {options.map((option, index) => {
                return (
                  <CheckboxWrapper key={index}>
                    <Input
                      type="checkbox"
                      onChange={(e) => changeInput(e, 'category')}
                      name={option}
                      value={option}
                      id={option}
                    />
                    <Label htmlFor={option}>{option}</Label>
                  </CheckboxWrapper>
                );
              })}
            </InputWrapper>
            <InputWrapper>
              {/* <Input id="" type="range" min={+price.minPrice} max={+price.maxPrice}  ></Input>
          <Input id="min" value = {price.minPrice} onChange = {(e)=>changePrice(e,"minPrice")}></Input>
          <Input id="max" value = {price.maxPrice} onChange = {(e)=>changePrice(e,"maxPrice")}></Input> */}
              <TwoThumbInputRange
                onChange={changePrice}
                values={value}
                min={0}
                max={+`${maxPrice | 0}`}
              />
            </InputWrapper>
          </fieldset>
        </StyledAside>
      )}
    </>
  );
};

export default LeftAside;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  .css-j8gyih-TwoThumbInputRange {
    margin-top: 3rem;
    output {
      /* width: 36px;
    height: 18px; */
      top: -25px;
      &:nth-child(1) {
        /* left: calc(0% - 16px);  */
      }
    }
  }
`;

const InputWrapper = styled.div<StyledInputRange>`
  margin-top: 1rem;
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
`;

const Input = styled.input`
  width: 100%;
`;

const Label = styled.label``;

const Select = styled.select`
  width: 80%;
`;

const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-bottom: 0.5rem;
`;

const Legend = styled.legend`
  margin-bottom: 0.5rem;
`;
