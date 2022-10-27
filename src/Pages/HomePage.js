import { Facebook, GitHub, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const HomePage = () => {
  return (
    <Container>
      <div className='typography'>
        <h1>Hi, I'm<span>Yuvaraj</span></h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Atque nihil voluptates ea dolore vel 
        repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
        </p>
      <div className='icons'>
        <a className='icon i-facebook' href='https://www.facebook.com/'>
          <Facebook/>
        </a>
        <a className='icon i-github'href='https://www.github.com/'>
          <GitHub/>
        </a>
        <a className='icon i-youtube' href='https://www.youtube.com/'>
          <YouTube/>
        </a>
       </div>
      </div>  

    </Container>
  
  )
}

export default HomePage

const Container = styled.div`
width: 100%;
height: 100vh;
position:relative;
.typography{
  position:absolute;
  top: 50%;
  left:50%;
  transform:translate(-50%, -50%); 
  text-align:center;
  width: 80%;
}
.icons{
  display:flex;
  justify-content:center;
  margin-top:1rem;
  .icon{
    border:2px solid var(--border-color);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    transition: all .4s ease-in-out;
    cursor:pointer;
    :hover{
      border:2px solid var(--primary-color);
      color:var(--primary-color);
    }
    &:not(:last-child){
     margin-right: 1rem;
  }
  svg{
    margin:.5rem;
  }
}
.i-youtube{
  :hover{
    border:2px solid red;
    color:red;
  }
}
.i-github{
  :hover{
    border:2px solid #5f4687;
    color:#5f4687;
  }
}
}
`