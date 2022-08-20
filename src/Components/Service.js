import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import animation from '../img/icons/3dAnimation.svg'
import artificialIntelligence from '../img/icons/artificial_intelligence.svg'
import gameDevelopment from '../img/icons/game_dev.svg'
import emergencySoftware from '../img/icons/emergency.svg'
import globalTeaching from '../img/icons/global.svg'
import videoProduction from '../img/icons/video_production.svg'
import Title from './Title';
import ServiceCard from './ServiceCard';

const Service = () => {
    const theme = useTheme();
  return (
    <Container theme={theme}>
        <div className='title-con'>
                <Title 
                    name={'Services'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>
        <div className='services-con'>
                      <ServiceCard 
                    title={'3d Animation'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ducimus modi consequuntur praesentium, veritatis nemo sint.'}
                    icon={animation}
                />
                <ServiceCard
                    title="Artificial Intelligence"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint."
                    icon={artificialIntelligence}
                />
                <ServiceCard
                    title="Game Development"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint."
                    icon={gameDevelopment}
                />
                <ServiceCard
                    title="Emergency Software"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint."
                    icon={emergencySoftware}
                />
                <ServiceCard
                    title="Global Teaching"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                          Ducimus modi consequuntur praesentium, veritatis nemo sint."
                    icon={globalTeaching}
                />
                <ServiceCard
                    title="Video Production"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint."
                    icon={videoProduction}
                />
                </div>
    </Container>
  )
}

export default Service
const Container = styled.div`
padding:5rem 7rem;
    .services-con{
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));
      grid-gap:2rem;
       
    }
`;
