import React from 'react'
import styled from 'styled-components';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { SvgWrapper } from '.';

const HeaderCart = () => {
    return (
        <StyledHeaderCart>
            <SvgWrapper><AiOutlineShoppingCart/></SvgWrapper>
        </StyledHeaderCart>
    )
}

export default HeaderCart

const StyledHeaderCart = styled.div `
display: grid;
align-items: center;
justify-content: center;
`


