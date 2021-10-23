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
            {/* <HeaderLoginAndLogout></HeaderLoginAndLogout>  */}
        </StyledHeader>
    )
}

export default Header


const StyledHeader = styled.header `
    
    display: grid;
    grid-template-columns: 1fr 4fr 0.5fr  1fr;
    width: 100vw;
    margin: 0;
    padding: 0;
    /* height: 70px; */
    background-color: aquamarine;

`
