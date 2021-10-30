import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';

interface StyledInputRange {
  variant?: "range";
  max?:number 
}

const LeftAside = () => {
  
  const products = useSelector<RootState, IProduct[]>(
    (state) => state.products.products
  );
  const [inputValue, setInputValue] = useState<string>('')
  const options: string[] = [
    ...new Set(products.map((item: IProduct): string => item.category)),
  ];
  const maxPrice = products.map((item) => item.price).sort((a, b) => b - a)[0];
  console.log(maxPrice);
  const changeInput =(e:React.FormEvent<HTMLInputElement>)=> { 
    console.log(e.currentTarget.value)
    setInputValue(e.currentTarget.value)
  }
  return (
    <StyledAside>
      <fieldset>
        <InputWrapper >
          <Input type="text" value={inputValue} placeholder="Search" onChange = {changeInput}></Input>
          <Label></Label>
        </InputWrapper>
        <InputWrapper>
          <Select>
            <option value="Choose category" disabled>Choose category</option>
            {options.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </Select>
        </InputWrapper>
        <InputWrapper variant = "range" max={maxPrice}> 
          <Input type="range" min="0" max={maxPrice}  ></Input>
          
        </InputWrapper>
      </fieldset>
    </StyledAside>
  );
};

export default LeftAside;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div <StyledInputRange>`
  margin-top: 1rem;
  position: relative;
  &:after, &:before {
    content: ${({ variant,max})=> `"${variant==="range"?max:''} "`}; 
    position: absolute;
    bottom: -10px;
    font-size: 0.9rem;

  }
  &:before {
    content: ${({ variant,max})=> `"${variant==="range"?0:''} "`}; 
    left:0;
  }
  &:after {
    
    right: 0;
  }
`;

const Input = styled.input`  
  width: 100%;
`;

const Label = styled.label`

`;

const Select = styled.select`
  width: 80%;
`;
