import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

const Button2 = ({name}) => {
  return (
    <Container>
        {name}
        <img src={arrow} alt=''/>
    </Container>
  )
}

export default Button2
const Container = styled.div`
    background-color:var(--dark-primary);
    padding:1rem 2rem;
    border-radius:20px;
    border:none;
    font-family:inherit;
    font-size:inherit;
    color:inherit;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    img{
        padding-left:.9rem;
    }
`;
