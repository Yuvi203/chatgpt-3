import React from 'react'
import {Switch, Route} from "react-router-dom"
import styled from 'styled-components'
import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from "./Pages/AboutPage"
import BlogPage from "./Pages/BlogPage"
import ContactPage from "./Pages/ContactPage"
import PortfolioPage from "./Pages/PortfoloioPage"
import ResumePage from "./Pages/ResumePage"
import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useState } from 'react'



const App = () => {
  const [navToogle, setNavToogle] = useState(false);
  return (
    <>
    <div>
      <Sidebar navToogle={navToogle}/>
    </div>
    <div className='hamburger'>
       <IconButton onClick={() => setNavToogle(!navToogle)}>
        <Menu/>
       </IconButton>
    </div>
    <MainStyled>
      <div className='lines'>
             <div className="line-1"></div>
            <div className="line-1"></div>
            <div className="line-1"></div>
            <div className="line-1"></div>
      </div>
      <Switch>
        <Route path='/' exact>
         <HomePage/>
        </Route>
        <Route path='/about' exact>
         <AboutPage/>
        </Route>
        <Route path='/resume' exact>
         <ResumePage/>
        </Route>
        <Route path='/portfolios' exact>
         <PortfolioPage/>
        </Route>
        <Route path='/blogs' exact>
         <BlogPage/>
        </Route>
        <Route path='/contact' exact>
         <ContactPage/>
        </Route>
      </Switch>
    </MainStyled>
    </>
  )
}

export default App;

const MainStyled = styled.div`
position:relative;
margin-left:16.3rem;
min-height:100vh;
.lines{
  position:absolute;
  min-height:100%;
  width: 100%;
  display:flex;
  justify-content:space-evenly;
  opacity:0.4;
  z-index:-1;
  .line-1{
    width: 1px;
    min-height:100vh;
    background-color:var(--border-color);
  }
}
`