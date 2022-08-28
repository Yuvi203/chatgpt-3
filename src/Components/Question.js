import React from 'react'
import styled from 'styled-components'
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import { useState } from 'react';
import {Fade} from 'react-reveal'

const Question = ({title, description}) => {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () =>{
        setToggle(!toggle);
    }

  return (
    <Fade left cascade>
    <Container>
       <div className='q-con'>
        <div className='toggle-title'>
          <h4>{title}</h4>
          <button onClick={btnToggler}>
           {toggle ? <img src={minus} alt=''/> : <img src={plus} alt=''/>
           }
          </button>
        </div>
         {toggle && <p>{description}</p>}
       </div> 
    </Container>
    </Fade>
  )
}

export default Question
const Container = styled.div`
    background-color:#fff;
    margin:1rem 0;
    padding:1.4rem 1rem;
    border-radius:24px;
    transition: all .4s ease-in-out;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
   
    h4{
       font-size:1.3rem;
       color:#16194f;
    }
    .toggle-title{
        display:flex;
        align-items:center;
        justify-content:space-between;
        button{
            background:transparent;
            outline:none;
            cursor: pointer;
            border:none;
        }
    }
`;
