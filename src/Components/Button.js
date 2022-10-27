import React from 'react'
import styled from 'styled-components'

const Button = ({filter, button}) => {
  return (
    <ButtonStyled>
        {
          button.map((but, i)=>{
             return <Container key={i} onClick={() => filter(but)}>
               {but}
             </Container>
          })
        }
    </ButtonStyled>
  )
}

export default Button
const Container = styled.button`
outline:none;
border:none;
background-color:var(--background-light-color-2);
padding:.4rem 2rem;
font-size:inherit;
color:var(--white-color);
cursor: pointer;
transition:all .4s ease-in-out;
margin-bottom:6rem;
margin-right:.6rem;
&:active ,&:focus{
    background-color:var(--primary-color);
}
&:not(:last-child){
    margin-right:.6rem;
}
:nth-child(6){
    margin-top:-4rem;
}
:nth-child(5){
    margin-top:-4rem;
}
:hover{
    background-color:var(--primary-color);
}
`
const ButtonStyled = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    width: 70%;
    margin:2.4rem auto;
`;

