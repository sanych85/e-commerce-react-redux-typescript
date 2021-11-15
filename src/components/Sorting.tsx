import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { sortItems } from '../store/actionCreators/filterActionCreators';
import {
  sortPayload,
  SortEnum,
  SortingType,
  SortDirectionType,
} from '../store/reducers/filterReducer/filterTypes';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { RootState } from '../store/store';

interface ISorting {
  //   onClick: React.MouseEvent<HTMLSpanElement>;
}

interface ISortItemWrapper {
  sortBy: string;
  variant: SortingType;
}

interface ISortSvg {
  sortby: string;
  variant: SortingType;
  sortdirection: string;
  direction: string;
}

const Sorting: React.FC = () => {
  const sortby = useSelector<RootState, SortingType>(
    (state) => state.filter.sortBy
  );
  const sortdirection = useSelector<RootState, string>(
    (state) => state.filter.sortDirection
  );

  const dispatch = useDispatch();
  const sortItem = (type: SortingType) => {
    console.log('click');
    dispatch(sortItems(type));
  };

  return (
    <SortingSection>
      <StyledSpanTitle>Sorting</StyledSpanTitle>

      <SortItemWrapper
        onClick={() => sortItem('price')}
        sortBy={sortby}
        variant="price">
        <SortItem>Price</SortItem>
        <SortUp
          direction="up"
          sortby={sortby}
          variant="price"
          sortdirection={sortdirection}></SortUp>
        <SortDown
          direction="down"
          sortby={sortby}
          variant="price"
          sortdirection={sortdirection}></SortDown>
      </SortItemWrapper>
      <SortItemWrapper
        onClick={() => sortItem('rate')}
        sortBy={sortby}
        variant="rate">
        <SortItem>Rating</SortItem>
        <SortUp
          direction="up"
          sortby={sortby}
          variant="rate"
          sortdirection={sortdirection}></SortUp>
        <SortDown
          direction="down"
          sortby={sortby}
          variant="rate"
          sortdirection={sortdirection}></SortDown>
      </SortItemWrapper>
      <SortItemWrapper
        onClick={() => sortItem('name')}
        sortBy={sortby}
        variant="name">
        <SortItem>Name</SortItem>
        <SortUp
          direction="up"
          sortby={sortby}
          variant="name"
          sortdirection={sortdirection}></SortUp>
        <SortDown
          direction="down"
          sortby={sortby}
          variant="name"
          sortdirection={sortdirection}></SortDown>
      </SortItemWrapper>
      <SortItemWrapper
        onClick={() => sortItem('count')}
        sortBy={sortby}
        variant="count">
        <SortItem>Count</SortItem>
        <SortUp
          direction="up"
          sortby={sortby}
          variant="count"
          sortdirection={sortdirection}></SortUp>
        <SortDown
          direction="down"
          sortby={sortby}
          variant="count"
          sortdirection={sortdirection}></SortDown>
      </SortItemWrapper>
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
const SortItemWrapper = styled.div<ISortItemWrapper>`
  svg {
    /* color: ${({ sortBy, variant }) =>
      sortBy === variant ? 'green' : 'red'} */
  }
`;
const SortUp = styled(AiOutlineArrowUp)<ISortSvg>`
  color: ${({ direction, variant, sortdirection, sortby }) =>
    direction === sortdirection && variant === sortby ? '#161616' : '#94949444'};
`;
const SortDown = styled(AiOutlineArrowDown)<ISortSvg>`
  color: ${({ direction, variant, sortdirection, sortby }) =>
    direction === sortdirection && variant === sortby ? '#161616' : '#94949444'};
`;
// const SortDown = styled(AiOutlineArrowDown)`
// color: ${() => getSvgStyle(sortBy, direction, sortDirection)};
// `;
const SortItem = styled.span`
  margin-left: 0rem;
  cursor: pointer;
`;

const StyledSpanTitle = styled.span`
  color: grey;
  margin-right: 3rem;
`;
