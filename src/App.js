import React from 'react'
import styled from 'styled-components'
import About from './Components/About'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Latest from './Components/Latest'
import Reccomendation from './Components/Reccomendation'
import Service from './Components/Service'
import {useTheme, useUpdateTheme} from './context/themeContext'
import themes from './context/themes'
const App = () => {
  const theme = useTheme()
  const setTheme = useUpdateTheme()
  return (
    <Container theme={theme}>
      <Header/>
      <main>
        <About/>
        <Service/>
        <Reccomendation/>
        <Latest/>
        <Blog/>
      </main>
      <Footer/>
      <div className='lines'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='theme-switcher'>
        {
          themes.map((theme, i)=>{
             return <button key={i} style={{background:theme.colorBg}} 
             onClick={() => setTheme(i)}
             ></button>
          })

        }

      </div>
    </Container>
  )
}

export default App
const Container = styled.div`

min-height:100vh;
position:relative;
background-color:${props => props.theme.colorBg};
z-index:5;
a{
  color: ${props => props.theme.colorWhite};
}
p{
  color: ${props => props.theme.colorFont};
}
.active-menu{
  border-radius:30px;
  background: ${props => props.theme.colorGradientPrimary2};
}
.lines{
  height: 100%;
  width: 100%;
  position:absolute;
  top: 0;
  left: 0;
  display:flex;
  justify-content:space-evenly;
  z-index:-1;
  .line{
    min-height:100%;
    width: 1px;
    background-color:${props => props.theme.colorGrey9};
  }
}
.theme-switcher{
  position:fixed;
  right: 10px;
  top:50%;
  transform:translateY(-50%);
  display:flex;
  flex-direction:column;
  button{
    cursor:pointer;
    width: 40px;
    height: 40px;
    border-radius:10%;
    outline:none;
    border:2px solid ${prop => prop.theme.colorAccent};
    margin-top:10px;
  }
}
`