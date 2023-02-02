import React from 'react'
import styled from 'styled-components'
import avatar from "../assets/avatar.jpg"


const Otherdesign = () => {
  return (
    <Container>
          <div className='text-con'>
          <div/>
          <h1>See our Other Front end design</h1>
        </div>
        <div className='avatar-con'>
        <div className='avatar'>
            <img src={avatar} alt=""/>
        </div>
        <div className='avatar'>
            <img src={avatar} alt=""/>
        </div>
        <div className='avatar'>
            <img src={avatar} alt=""/>
        </div>
        </div>
      
        
    </Container>
  )
}

export default Otherdesign

const Container = styled.div`
    padding:2rem;
    
    display:flex;
    flex-direction:column;
    .text-con{
        margin:10px;
        div {
    width: 47%;
    height: 3px;
    background: var(--gradient-bar);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
}
        h1{
        font-family: var(--font-family);
    font-weight: 700;
    font-size: 40px;
    line-height: 24px;
   // letter-spacing: -0.04em;
    color: #fff;
    padding-top:10px;
        }
    }
      .avatar{  
    cursor:pointer;
     width:30%;
     border-bottom:1px solid var(--color-bg);
    padding:1rem 0;
    text-align:center;
    img{
        width:50%;
        border-radius:50%;
        border:8px solid var(--color-bg);
    }

    }
    .avatar-con{
      display:flex;
      align-items:center;
      justify-content:center;
    }
`;

