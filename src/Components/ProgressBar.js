import React from 'react'
import styled from 'styled-components'

const ProgressBar = ({title, width, text}) => {
  return (
    <Container>
        <h6>{title}</h6>
        <div className='progress-bar'>
            <p>{text}</p>
            <div className='progress'>
            <span style={{width:width}}></span>
            </div>
        </div>
    </Container>
  )
}

export default ProgressBar

const Container = styled.div`
.progress-bar{
    display:flex;
    align-items:center;
    p{
        padding-right:1.1rem;
    }
    .progress{
        position:relative;
        width: 100%;
        height:.4rem;
        background-color:var(--border-color);
        span{
            position:absolute;
            background-color:var(--primary-color);
            height: 100%;
            left: 0;bottom: 0;
        }
    }
}
`