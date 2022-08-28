import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import Button from './Button'
import {Fade} from 'react-reveal'

const NavBar = () => {
  return (
    <Fade top>
    <Container>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>Features</a>
            </li>
            <li>
                <a href='#'>Pricing</a>
            </li>
        </ul>
         <Button name={'Sign Up'}/>
    </Container>
    </Fade>
  )
}

export default NavBar
const Container = styled.div`
    min-height:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ul{
        display:flex;
        justify-content:space-between;
        width:40%;
    }

`;
