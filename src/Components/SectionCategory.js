import React from 'react'
import styled  from "styled-components"
import { InnerLayout } from '../Layout'
import Catbtn from './Catbtn'
import Title from './Title'

const SectionCategory = () => {
  return (
    <Container>
       <InnerLayout>
        <div className='title-con'>
          <Title name={'All Categories'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!'} />   
        </div>
        <div className='category-con' style={{color:"black"}}>
                    <Catbtn name={'Game Development (600)'} />
                    <Catbtn name={'Game Design (1000+)'} />
                    <Catbtn name={'Digital Artist (3,400)'} />
                    <Catbtn name={'Creative/Director (71)'} />
                    <Catbtn name={'Software Engineer (2000+)'} />
                    <Catbtn name={'Software Developer (200) '} />
                    <Catbtn name={'Product Manager (900)'} />
                    <Catbtn name={'Product Designer (108)'} />
                    <Catbtn name={'Researchers (26)'} />
                    <Catbtn name={'Web Designer (300)'} />
                    <Catbtn name={'Web Developer (1400+)'} />
                    <Catbtn name={'UI / UX (2,300)'} />
        </div>
       </InnerLayout>

    </Container>
  )
}

export default SectionCategory

const Container = styled.div`
    .category-con{
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        padding-top:3rem;
        grid-gap:1.2rem;
        @media screen and (max-width: 822px) {
          grid-template-columns:repeat(2, 1fr);
    }
`;
