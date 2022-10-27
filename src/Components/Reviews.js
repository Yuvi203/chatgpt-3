import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from './ReviewItem';

const Reviews = () => {
  return (
    <Container>
        <Title title={'Reviews'} span={'Reviews'}/>
        <InnerLayout>
            
        <div className="reviews">
                    <ReviewItem 
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'} 
                    />
                      <ReviewItem 
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'} 
                    />

        </div>


        </InnerLayout>
    </Container>
  )
}

export default Reviews
const Container = styled.div`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
