import React from 'react'
import { InnerLayout } from '../Layout';
import styled from 'styled-components';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';

const MessagingSection = () => {
  return (
    <Container>
        <InnerLayout>
            <div className='message-con'>
             <div className='left-items'>
               <h2 className='secondary-heading'>
               We support you in 5 different languages
               </h2>
               <p className="m-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
              </p>
              <div className='images-con'>
              <img src={avatar1} alt="" className="image-1" />
              <img src={avatar2} alt="" className="image-2" />
              <img src={avatar3} alt="" className="image-3" />
              <img src={avatar4} alt="" className="image-4" />
              <img src={avatar5} alt="" className="image-5" />
              <p>+25</p>
              </div>
              <img src={bgCircles} alt='' className='bgCircle'/>
             </div>  
             <div className='right-items'>
               <img src={messaging} alt=''/>
               <img src={bgCircles} alt='' className='bgCircle'/>
             </div> 

            </div>
        </InnerLayout>

    </Container>
  )
}

export default MessagingSection
const Container = styled.div`
padding:5rem 7rem;
    .message-con{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
    .left-items{
        position:relative;
        padding-right:2rem;
        .m-para{
            padding:1rem 0;
        }
        .images-con{
            display:flex;
            align-items:center;
            .image-2, .image-3, .iamge-4, .image-5{
                margin-left:-22px;
            }
        }
        .bgCircle{
            position:absolute;
            top:-7px;
            left:-10%;
            z-index:-1;
        }
    }
.right-items{
    position:relative;
    img{
        padding-left:2rem;
    }
    .bgCircle{
        position:absolute;
        right: 0;
        bottom:-7%;
        z-index:-1;
    }
}
}
`;
