import React from 'react'
import styled from 'styled-components'
import agency2 from "../img/agency2.jpg"
import {useTheme} from '../context/themeContext'
import Button from './Button'

const Reccomendation = () => {
  const theme = useTheme();
  return (
    <div>
        <Container theme={theme}>
          <div className='left'>
            <img src={agency2} alt='agency2'/>
          </div>
          <div className='right'>
            <div className='right-content'>
            <h3 className="title">
               Get personalized digital <br /> recommendations
           </h3>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Expedita quam sequi maiores veritatis dolorum cum
               quidem impedit alias beatae deleniti quisquam nesciunt repellat, explicabo optio.
           </p>
           <Button
           name={'EXPLORE MORE'}
           icon={'fas fa-chevron-right'}
           arrow={'arrow'}
           blob={'blob'}
           />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Reccomendation
const Container = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap:2rem;
  background-color:${props => props.theme.colorBg3};
  margin-bottom:6rem;
  box-shadow: 0 5px 18px #212529b7;
  .left{
   border-top-left-radius:5px;
   overflow:hidden;
   img{
    border-top-left-radius:5px;
    width: 100%;
    object-fit:cover;
    filter:grayscale(100%);
    transition: all .3s ease-in-out;
    :hover{
      filter:grayscale(0);
      transform: scale(1.2) rotate(-5deg);
    }
   }
  }
  .right{
    display:flex;
    align-items:center;
    .right-content{
      padding:1rem;
      h3{
        color:white;
        font-size:2.5rem;
        padding-bottom:1rem;
        margin-bottom:2rem;
        position:relative;
        ::after{
          content:'';
          position:absolute;
          width:20%;
          height: 2px;
          background-color:${props => props.theme.colorAccent};
          bottom: 0;
          left: 0;
      }
    }
    p{
      color:${props => props.theme.colorAccent};
      padding-bottom:2rem;
    }
    }
  }
`
