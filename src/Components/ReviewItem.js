import React from 'react'
import styled from 'styled-components'

const ReviewItem = ({text}) => {
  return (
    <Container>
        <p>{text}</p>
    </Container>
  )
}

export default ReviewItem

const Container = styled.div`
background-color:var(--background-dark-grey);
padding:2rem 1rem;
width: 100%;
border-left:6px solid var(--border-color);
position:relative;
::after{
 content:"";
 position:absolute;
 border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
 border-style: solid;
 border-width: .8rem;
 top: 100%;
 left: 2rem;
}
p{
    padding:1rem 0;
}

`