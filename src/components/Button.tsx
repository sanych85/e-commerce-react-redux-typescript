import React from 'react';
import styled from 'styled-components';

interface IButton {
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  children: React.ReactNode;
  padding?: string;
  marginBottom?: string;
  marginTop?: string,
  disabled?:boolean 

  onClick: () => void;
}

interface IStyledButton {
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  marginBottom?: string;
  marginTop?: string,
}

const Button: React.FC<IButton> = ({
  children,
  color,
  bgColor,
  marginBottom,
  hoverColor,
  hoverBgColor,
  onClick,
  disabled,
  marginTop 
}) => {
  return (
    <div>
      <StyledButton
        color={color}
        bgColor={bgColor}
        marginBottom={marginBottom}
        hoverColor={hoverColor}
        hoverBgColor={hoverBgColor}
        onClick= {onClick}
        disabled = {disabled}
        marginTop= {marginTop}
        >
        {children}{' '}
        
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button<IStyledButton>`
  display: grid;
  justify-self: center;
  align-items: center;
  border-radius: 10px;
  text-transform: uppercase;
  color: ${({ color }) => color || ''};
  background-color: ${({ bgColor }) => bgColor || ''};
  
  padding: 7px 10px;
  margin: 0 auto 1rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};
  margin-top: ${({marginTop})=>marginTop || "0rem"};
  transition: all ease 0.6s;
  &:hover {
      cursor: pointer;
    color: ${({ hoverColor }) => hoverColor || ''};
    background-color: ${({ hoverBgColor }) => hoverBgColor || ''};
  }
  &:disabled {
    background-color: grey;
    color: black;
    &:hover {
      background-color: grey;
      color: black;
      /* cursor: none; */
    }
  }

`;
