import React from 'react'
import styled from 'styled-components'

const Button = ({name}) => {
  return (
    <Container>
         {name}
    </Container>
  )
}

export default Button
const Container = styled.div`
    background-color:var(--accent-pink);
    padding:.7rem 2rem;
    border-radius:20px;
    font-family:inherit;
    color:inherit;
    outline:none;
    border:none;
    cursor: pointer;
`;
