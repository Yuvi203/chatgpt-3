import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layout'
import card from '../img/creditcard.svg'

const CardSection = () => {
  return (
    <Container>
        <InnerLayout>
            <div className='card-container'>
                <div className='card-left'>
                    <h2 className='secondary-heading'>
                    One card for all your payments
                    </h2>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit doloremque quia? Odit illo, tempore quod vero exercitationem, 
                    voluptatum laudantium quo harum, adipisci tenetur eum.
                    </p>
                </div>
                <div className='card-right'>
                  <img src={card} alt=''/>
                </div>
            </div>
            </InnerLayout>
        
    </Container>
  )
}

export default CardSection
const Container = styled.div`
padding:5rem 7rem;
.card-container{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
   
    .card-right{
        display: flex;
        justify-content: flex-end;
        img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
        img{
            width: 500px;
        }
    }
    .card-left{
        p{
            padding:1rem 0;
        }
       
    }

}

`;
