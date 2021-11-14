import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { sortItems } from '../store/actionCreators/filterActionCreators';
import {
  sortPayload,
  SortEnum,
  SortingType 
} from '../store/reducers/filterReducer/filterTypes';

interface ISorting {
  //   onClick: React.MouseEvent<HTMLSpanElement>;
}

const Sorting: React.FC<ISorting> = () => {
  const dispatch = useDispatch();
  const sortItem = (
    type: SortingType
  ) => {
      console.log("click")
    dispatch(sortItems(type));
  };
  return (
    <SortingSection>
      <StyledSpanTitle>Sorting</StyledSpanTitle>
      <StyledSpan onClick={() => sortItem('price')}>Price</StyledSpan>
      <StyledSpan onClick={() => sortItem('rate')}>Rating</StyledSpan>
      <StyledSpan onClick={() => sortItem('name')}>Name</StyledSpan>
      <StyledSpan onClick={() => sortItem('count')}>Count</StyledSpan>
    </SortingSection>
  );
};

export default Sorting;

const SortingSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr; */
  justify-self: flex-start;
  /* width:100%;  */
  gap: 0.5rem;
  margin-left: 2.5rem;
  margin-top: 2rem;
  text-transform: uppercase;
`;

const StyledSpan = styled.span`
  margin-left: 0rem;
`;

const StyledSpanTitle = styled.span`
  color: grey;
  margin-right: 3rem;
`;
