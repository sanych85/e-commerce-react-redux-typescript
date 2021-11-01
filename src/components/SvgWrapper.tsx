import React from 'react'
import styled from 'styled-components';

interface ISvgWrapper {
    children: React.ReactNode;
    width?: string;
    height?: string;
    type?: "svgWithLabel",
    content?: any
}

interface ISvgWrapperStyled {
    width?: string;
    height?: string;
    type?: "svgWithLabel",
   
}

const SvgWrapper:React.FC<ISvgWrapper> = ({children, width, height,type ,content}) => {

    
    return (
        <StyledSvgWrapper type = {type} width = {width} height = {height} >
            <span>{content}</span>
            {children}
        </StyledSvgWrapper>
    )
}

export default SvgWrapper

const StyledSvgWrapper = styled.div<ISvgWrapperStyled> `
    position: relative;

    span {
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
        color:white;
    }

svg {
    
    width: ${({width})=> width || "36px"};
    height: ${({height})=> height || "36px"};

   

}

`

