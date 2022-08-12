import React from 'react'
import styled from 'styled-components';
import google from '../img/googleappstore.png'
import apple from '../img/appstore.png'
import business from '../img/business.jpg'
import { InnerLayout } from '../Layout';
const SectionDownload = () => {
  return (
    <Container>
          <div clasName='dl-overlay'></div>
          <InnerLayout>
            <div className='dl-con'>
               <h2>New Version  Available</h2>
               <h1>
                 Download Our Mobile App. <br />
                 It's Simple and Better Than Ever
              </h1>
            </div>
          </InnerLayout>
    </Container>
  )
}

export default SectionDownload
const Container = styled.div`
 background: url(${business});
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
position:relative;
    .dl-overlay{
     position:absolute;
     left: 0;
     top:0;
     width: 100%;
     height: 100%;
     background-color: #27ae60f2;

    }
    .dl-con{

    }
`;
