import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import questions from './questions';
import Question from './Question';

const FAQSection = () => {
  return (
    <Container>
        <InnerLayout>
            <h3 className='small-heading'>Frequently <span>asked questions </span></h3>
            <p className='c-para'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda maxime ipsa nam expedita dolorem distinctio illo 
            ad doloribus atque fuga, Nihil laboriosam beatae fugit.
            </p>
            <div className='questions-con'>
               {
                questions.map((q)=>{
                    return <Question key={q.id} {...q}/>
                })
               }
            </div>
        </InnerLayout>
    </Container>
  )
}

export default FAQSection
const Container = styled.div`
padding:5rem 18rem;
position: relative;
    .c-para{
        margin:0 auto;
        width:60%;
    }
    .questions-con{
        padding-top:4rem;
    }
`;
