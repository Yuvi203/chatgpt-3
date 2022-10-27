import React from 'react'
import styled from 'styled-components'

const ResumeItem = ({year, title, subTitle, text}) => {
  return (
    <Container>
        <div className='left-content'><p>{year}</p></div>
        <div className='right-content'>
            <h5>{title}</h5>
            <h6>{subTitle}</h6>
            <p>{text}</p>
        </div>
    </Container>
  )
}

export default ResumeItem

const Container = styled.div`
display:flex;
padding-bottom:3rem;
@media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
.left-content{
    width: 50%;
    padding-left:20px;
    position:relative;
    ::before{
        content:"";
        position:absolute;
        height: 15px;width: 15px;
        border-radius:50%;
        border:2px solid var(--border-color);
        background-color:var(--background-dark-color);
        left: -11px;
        top:5px;
    }
    p{
        display:inline-block;
    }
}
.right-content{
    padding-left:5rem;
    position:relative;
    ::before{
        content:"";
        position:absolute;
        height: 2px;
        width: 3rem;
        background-color:var(--border-color);
        left: 0;
        top:15px;
    }
    h5{
        color:var(--primary-color);
        font-size:2rem;
        padding-bottom:.4rem;
    }
    h6{
        padding-bottom:.6rem;
        font-size:1.5rem;
    }

}
`