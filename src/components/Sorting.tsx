import React from 'react'
import styled from 'styled-components';

const Sorting = () => {
    return (
        <SortingSection>
            <StyledSpanTitle>Sorting</StyledSpanTitle>
            <StyledSpan>Price</StyledSpan>
            <StyledSpan>Rating</StyledSpan>
            <StyledSpan>Name</StyledSpan>
        </SortingSection>
    )
}

export default Sorting


const SortingSection = styled.section `
 display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
/* grid-template-rows: 1fr; */
justify-self: flex-start;
/* width:100%;  */
gap: 0.5rem;
margin-left: 2.5rem;
margin-top:2rem;
text-transform: uppercase;
`




const StyledSpan = styled.span `
    margin-left: 0rem;
`

const StyledSpanTitle = styled.span `
color:grey;
margin-right: 3rem;
`