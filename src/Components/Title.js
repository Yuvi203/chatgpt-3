import React from 'react'
import { useTheme } from '../context/themeContext';
import styled from 'styled-components'
const Title = ({name, subtext}) => {
    const theme = useTheme();
  return (
    <Container theme={theme}>
        <h3>{name}</h3>
        <p>{subtext}</p>
    </Container>
  )
}

export default Title
const Container = styled.div`
    h3{
        font-size:2.5rem;
        font-weight:700;
        color:white;
    }
`;
