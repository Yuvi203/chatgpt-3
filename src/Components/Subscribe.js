import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layout';

const Subscribe = () => {
  return (
    <Container>
        <InnerLayout>
            <div className='s-con'>
                <div className='left'>
                <h2>
                    Subscribe to our newsletter<br /> for the latest news.
               </h2>
                </div>
                <div className='right'>
                   <div className='input-control'>
                     <input type={'text'} placeholder='Enter Your Email'/>
                     <div className='s-btn'> 
                        Subscribe Now
                     </div>
                   </div>
                </div>

            </div>
        </InnerLayout>
    </Container>
  )
}

export default Subscribe
const Container = styled.div`
    background-color:var(--color-primary);
    .s-con{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        @media screen and (max-width:1234px) {
          grid-template-columns:repeat(1, 1fr);
          .left{
            width: 100%;
            display:inline-block !important;
            padding-bottom:2rem;
            h2{
                text-align:center;
            }
          }
        }
    }
    .left{
        display:flex;
        align-items:center;
       width: 90%;
        h2{
            font-size:2.2rem;
            line-height:4rem;
        }
    }
    .right{
        display:flex;
        align-items:center;
    }
    .input-control{
        position:relative;
        font-weight:500;
        width: 100%;
        input{
            font-family:inherit;
            font-size: inherit;
            padding:1.4rem 2rem;
            width: 100%;
            outline:none;
            border:none;
            border-radius:7px;
        }
        .s-btn{
                  
            position:absolute;
            top: 50%;
            right:.2rem;
            background-color:var(--color-dark);
            transform:translateY(-50%);
            padding:1.1rem 2rem;
            cursor: pointer;
            border-radius:7px;
            transition: all .4s ease-in-out;
                &:hover{
                    background-color: var(--color-primary);
                }
        }
    }
`;

