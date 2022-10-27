import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {InnerLayout} from "../styles/Layouts"
import ProgressBar from './ProgressBar'

const Skills = () => {
  return (
    <Container>
      <Title title={'My Skills'} span={'my skils'}/>
      <InnerLayout>
        <div className='skills'>
           <ProgressBar
           title={'HTML5'}
           width={'70%'}
           text={'70%'}
           />
            <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'UNITY'}
                            width={'75%'}
                            text={'75%'}
                        />
        </div>
      </InnerLayout>
    </Container>
  )
}

export default Skills

const Container = styled.div`
.skills{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-row-gap:2rem;
    grid-column-gap:3rem;
    @media screen and (max-width:700px){
            grid-template-columns: repeat(1, 1fr);
        }
}
`