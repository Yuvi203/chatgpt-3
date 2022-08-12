import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layout';
import Title from './Title';
import JobsCard from './JobsCard';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';

const SectionJobs = () => {
  return (
    <Container>
        <InnerLayout>
            <div className='title-con'>
               <Title  name={'Recent Job'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!'} />
            </div>
            <div className='cards-con'>
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       <JobsCard 
                        logo={logo1}
                        bg={'#27AE60'}
                        name={'Maniac Tech'}
                        loc={'New York, NY'}
                        tit={'Software Engineer'} 
                        type={'Full Time'} 
                        stack={'Azure, C++, Python, CSV, MySQL or PostgreSQL'}
                        salary={'$70,000 - $90,000'}
                    />
                       
                  
            </div>
        </InnerLayout>
    </Container>
  )
}

export default SectionJobs
const Container = styled.div`
    background-color:var(--color-neutral-3);
    .cards-con{
      padding-top:3.5rem;
      display:grid;
   ///  grid-template-columns:repeat(3, 1fr);
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap:2rem;
    }
`;
