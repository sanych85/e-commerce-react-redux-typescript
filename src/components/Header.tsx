import React from 'react'
import styled from 'styled-components';
import { HeaderLoginAndLogout } from '.';
import HeaderCart from './HeaderCart';
import Logo from './Logo';
import Navbar from './Navbar';
const Header = () => {
    return (
        <StyledHeader>
            <Logo></Logo>
            <Navbar></Navbar>
            <HeaderCart></HeaderCart>
            <HeaderLoginAndLogout></HeaderLoginAndLogout> 
        </StyledHeader>
    )
}

export default Header


const StyledHeader = styled.header `
    
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr ;
    width: 100vw;
    margin: 0;
    /* margin-left: -30px; */
    padding: 0;
    box-sizing: border-box;
    grid-gap: 0px;
    /* height: 70px; */
    background-color: aquamarine;

`
