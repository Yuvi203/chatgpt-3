import React from 'react'
import styled from 'styled-components';

const Title = ({name, para}) => {
  return (
    <Container>
        <h3>{name}</h3>
        <p>{para}</p>
    </Container>
  )
}

export default Title;
const Container = styled.div`
    h3{
        color:var(--color-dark);
        font-size:2.2rem;
    }
    p{
        padding:1rem 0;
    }
`;
