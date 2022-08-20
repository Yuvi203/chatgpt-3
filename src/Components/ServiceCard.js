import React from 'react'
import styled from 'styled-components'
import {useTheme} from '../context/themeContext'

const ServicesCard = ({title, desc, icon}) => {
  const theme = useTheme()
  return (
    <Container theme={theme}>
       <div className='items'>
         <img src={icon} alt=''/>
          <h4>{title}</h4>
          <p>{desc}</p>
          <a href="#" className="learn-more">
            <span>
                Learn More
             </span>
             <span className="arrow">
               <i className="fas fa-chevron-right"></i>
            </span>
           </a>
       </div>
    </Container>
  )
}

export default ServicesCard
const Container = styled.div`
  background-color:${props => props.theme.colorGreyLight};
  text-align:center;
  border-radius:7px;
  transition:all .4s ease-in-out;
  position:relative;
  padding:3rem 2rem;
 // width: 100%;
 // height: 100%;

  ::before{
    content:'';
    position:absolute;
    width: 100%;
    height: .4rem;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    background:${props => props.theme.colorGradientPrimary2};
    bottom: 0;
    left: 0;
    transform:scaleX(0);
    transition:all .4s ease-in-out;

  }
  :hover{
    transform:translateY(-5px);
    box-shadow: 10px 10px 0px ${props => props.theme.colorBorder};
    ::before{
      transform:scaleX(1);
    }
  }
 
.items{
  img{
    padding-bottom:2rem;
    height: 100px;
  }
  h4{
     color:white;
     font-size:1.5rem;
     padding-bottom:1rem;
  }
  p{
    padding:2rem;
    text-align:center;
  }
  a{
    span{
      padding-bottom:1rem;
    }
  }
}
`;
