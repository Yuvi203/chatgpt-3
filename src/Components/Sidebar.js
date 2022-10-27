import React from 'react'
import styled from "styled-components"
import Navigation from './Navigation'

const Sidebar = ({navToogle}) => {
  return (
    <Container className={`${navToogle ? 'nav-toogle' : ''}`}>
        <Navigation/>
    </Container>
  )
}

export default Sidebar
const Container = styled.div`
    width:16.3rem;
    background-color:var(--sidebar-dark-color);
    position:fixed;
    height: 100vh;
    overflow:hidden;
    transition:all .4s ease-in-out;
    @media screen and (max-width:1200px) {
      transform:translateX(-100%);
      z-index:20;
    }

`;
