import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg.svg'
import HeaderContent from './HeaderContent'
import NavBar from './NavBar'

const Header = () => {
  return (
    <Container>
        <div className='header-content'>
            <NavBar/>
            <HeaderContent/>

        </div>

    </Container>
  )
}

export default Header;
const Container = styled.div`
    min-height:100vh;
    width: 100%;
    background-image:url(${bg});
    background-size:cover;
    background-repeat:no-repeat;
    background-position-y:100%;
    .header-content{
        padding:0 18rem;
        @media screen and (max-width:1347px) {
           padding:0 14rem;
        }
        @media screen and (max-width:1186px) {
          padding:5rem 8rem;
        }
        @media screen and (max-width:990px) {
          padding:5rem 4rem;
        }
    }
`;
