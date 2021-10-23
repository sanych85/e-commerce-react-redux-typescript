import React from 'react'
import styled from 'styled-components';

interface ISvgWrapper {
    children: React.ReactNode;
    width?: string;
    height?: string;
    type?: "withQuantity"
}

interface ISvgWrapperStyled {
    width?: string;
    height?: string;
    type?: "withQuantity"
}

const SvgWrapper:React.FC<ISvgWrapper> = ({children, width, height,type}) => {
    return (
        <StyledSvgWrapper type = {type} width = {width} height = {height}>
            {children}
        </StyledSvgWrapper>
    )
}

export default SvgWrapper

const StyledSvgWrapper = styled.div<ISvgWrapperStyled> `
    position: relative;
 &:before {
        content: "1";
        position: absolute;
        /* display: grid;
        align-self:center; */
        width: 20px;
        height: 20px;
        top: -5px;
        right: -5px;
        border-radius: 100%;
        background-color: #ac7fff;
        z-index:999;
        text-align: center;
    }
svg {
    
    width: ${({width})=> width || "36px"};
    height: ${({height})=> height || "36px"};

   

}

`

