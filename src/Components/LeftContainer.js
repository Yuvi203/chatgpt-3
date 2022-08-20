import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Button from './Button'

const LeftContainer = () => {
    const theme = useTheme()
  return (
    <Container theme={theme}>
        <h1>
        We Are A Number <span>One Creative Digital</span> Agency Online
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Totam vel aliquid esse, ea nesciunt dolor est dolore dicta itaque dolores
        illo rerum officiis.
        </p>
        <Button
        name={'Get Started'}
        icon={'fas fa-chevron-right'}
        arrow={'arrow'}
        blob={'blob'}
        />
    </Container>
  )
}

export default LeftContainer
const Container = styled.div`
h1{
    font-size:3rem;
    font-weight:600;
    color:white;
    span{
      background:${props => props.theme.colorGradientPrimary2};
      background-clip:text;
      -webkit-background-clip:text;
      color:transparent;
      }
}  
p{
    font-size:1.1rem;
    line-height:1.6rem;
    padding:2rem 0;
}
animation: contentHide 1s ease-in-out;
@keyframes contentHide {
  0%{
    opacity:0;
    transform:translateX(-120%) scaleX(0);
  }
  100%{
    opacity:1;
    transform:translateX(0) scaleX(1);
  }
}
`