import React from 'react'
import styled from 'styled-components';
const HeaderLoginAndLogout = () => {
    return (
        <StyledLoginAndLogout>
            <StyledLogin>Login</StyledLogin>
            <StyledLogout>Logout</StyledLogout>
        </StyledLoginAndLogout>
    )
}

export default HeaderLoginAndLogout

const StyledLoginAndLogout = styled.div `
display: flex;
justify-items: center;
align-items: center;
`

const StyledLogin = styled.div `

margin-right: 1rem;
`
const StyledLogout = styled.div `

`
  