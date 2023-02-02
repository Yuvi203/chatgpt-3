import React from 'react'
import styled from 'styled-components'

const Register = () => {
  return (
    <Container>
      <div className='form'>
        <input placeholder='Enter your email address'/>
        <button className='but'>Register</button>
      </div>
    </Container>
  )
}

export default Register

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 2rem;
  .form{
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 40%;
   margin: 2rem 0 1rem;
   position:absolute;
   bottom: 50%;
   left: 33%;
   right: 55%;
   input{
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-radius:5px;
   }
   button{ 
     margin-top:1.5rem;
   }
  }
`;
