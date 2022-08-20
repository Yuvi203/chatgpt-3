import React from 'react'
import styled from 'styled-components'
import {useTheme} from "../context/themeContext"

const Button = ({name, icon, arrow, blob}) => {
    const theme = useTheme()
  return (
    <Container theme={theme}>
      {name}
      <span className={arrow}><i className={icon}></i></span>
      <span className={blob}></span>
    </Container>
  )
}

export default Button
const Container = styled.a`
    cursor:pointer;
    background:${props => props.theme.colorGradientPrimary3};
    padding:.8rem 2rem;
    overflow:hidden;
    border-radius:30px;
    position:relative;
    transition:all .4s ease-in-out;
    display:inline-block;
    .blob{
      position:absolute;
      top:-5px;
      right:-55px;
      width: 180px;
      height: 180px;
      background: rgba(255,255,255,.2);
      border-radius:50%;
      transition: all .4s cubic-bezier(.21,.69,.73,1.08);
    }
    :hover{
      span{
        right:-30px;
        top:-15px;
      }
    }
    
`;
