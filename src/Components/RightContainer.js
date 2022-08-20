import React from 'react'
import { useTheme } from '../context/themeContext';
import agency3 from '../img/agency3.jpg'
import agency4 from '../img/agency4.jpg'
import styled from 'styled-components'
const RightContainer = () => {
    const theme = useTheme();
  return (
    <Container theme={theme}>
        <img className='h-img-1' src={agency4} alt=''/>   
        <img className='h-img-2' src={agency3} alt=''/>
    </Container>
  )
}

export default RightContainer
const Container = styled.div`
    position:relative;
    transition:all .4s ease-in-out;
    animation: contentHide2 1s ease-in-out;
    animation-delay: .5s;
    opacity:0;
    animation-fill-mode:forwards;
    padding:0 4rem .4rem 0;
    @keyframes contentHide2 {
        0%{
            opacity:0;
            transform:translateY(-120%) scale(0);
            visibility:none;
        }
        100%{
            opacity:1;
            transform:translateY(0) scale(1);
            visibility:visible;
        }
    }
    :hover{
        .h-img-2{
            transform:scale(0.9);
        }
        .h-img-1{
            transform:scale(1.1);
        }
    }
    .h-img-1{
        position:absolute;
        width: 300px;
        height: 500px;
        object-fit:cover;
        right: 0;
        border-bottom-right-radius:70px;
        border-bottom-left-radius:5px;
        border-top-right-radius:5px;
        border-top-left-radius:5px;
        transition: all .4s ease-in-out;
    }
    .h-img-2{
        position: absolute;
        width: 300px;
        height: 400px;
        object-fit:cover;
        border-bottom-right-radius:5px;
        border-bottom-left-radius:70px;
        border-top-right-radius:5px;
        border-top-left-radius:5px;
        transition: all .4s ease-in-out;
        left:5%;
        top:15%;
    }
`;
