import { GitHub, Pinterest } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Menu = ({menuItem}) => {
  return (
    <Container>
        {
            menuItem.map((item)=>{
               return <div className='grid-item' key={item.id}>
                    <div className='portfolio-content'>
                      <div className='portfoio-image'>
                         <img src={item.image} alt=''/>
                      </div>
                      <h6>{item.title}</h6>
                      <p>{item.text}</p>
                    </div>
               </div>
            })
        }
    </Container>
  )
}

export default Menu

const Container = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:2rem;
@media screen and (max-width: 920px){
   grid-template-columns:repeat(2, 1fr);
    }
    @media screen and (max-width: 670px){
        grid-template-columns:repeat(1, fr);
    }
.grid-item{
    .portfolio-content{
        display:block;
        position:relative;
        overflow:hidden;
        h6{
            font-size:1.5rem;
        }
        img{
            width: 100%;
            height: 30vh;
            object-fit:cover;
        }
    }
}
/*.portfolio-image{
    ::before{
        content:"";
        position:absolute;
        left: 2%;
        height: 0;
        width: 0;
        transition:all .4s ease-in-out;

    }
    :hover{
        background-color:red;
    }
    }*/


`