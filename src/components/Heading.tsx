import React from 'react';
import styled, {css} from "styled-components"


export enum HeadingTypes {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
}

interface IHeading {
  type?: HeadingTypes;
  children: React.ReactNode;
  color?: string 
}



const Heading: React.FC<IHeading> = ({ type, children, color }): JSX.Element => {
    console.log(color)
  if (type === HeadingTypes.h1) {
    return <H1 color = {color}>{children}</H1>;
  } else if (type === HeadingTypes.h2) {
    return <H2 color = {color}>{children}</H2>;
  } else if (type === HeadingTypes.h3) {
    return <H3 color = {color}>{children}</H3>;
  } 

  else if (type === HeadingTypes.h4) {
    return <H4 color = {color}>{children}</H4>;
  } 
  
  else {
    return <H4 color = {color}>{children}</H4>;
  }
};

export default Heading;


const base = css`
text-transform: uppercase;

`
const H1 = styled.h1` 
font-size: 2.2rem;
color: ${({color})=> color || "blue"};
${base}
`
const H2 = styled.h2 `
font-size: 1.7rem;
color: ${({color})=> color || "blue"};
${base}
`
const H3 = styled.h3 `
font-size: 1.4rem;
color: ${({color})=> color || "blue"};
${base}
`
const H4 = styled.h4 `
font-size: 1.2rem;
color: ${({color})=> color || "blue"};
${base}
`
