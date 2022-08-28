import React from 'react'
import styled from 'styled-components';
import CharStats from './CharStats';
import chart from '../img/chart.svg';
import { InnerLayout } from '../Layout';
import AnimatedButton from './AnimatedButton';
import {Bounce, Roll} from 'react-reveal'
import RubberBand from 'react-reveal/RubberBand'

const ChartSection = () => {
  return (
    <Container>
        <InnerLayout>
        <div className='chart-con'>
            <div className='chart-left'>
            <div className='stats'>
                <div className='stats-money'>
                <CharStats name={'Balance'} amount={'$250'}/>
                <CharStats name={'Last Transaction'} amount={'$1,000'}/>
                </div>
             <img src={chart} alt=''/>
            </div>
            </div>
            <div className='chart-right'>
            <h2 className='secondary-heading'>Manage your finances like a pro in no time</h2>
            <Roll right>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia nemo distinctio dolores necessitatibus odit magni corrupti error, 
             voluptate alias adipisci ducimus nostrum maiores. Ad?
            </p>
            </Roll>
            <Bounce right>
            <AnimatedButton name={'Learn More'}/>
            </Bounce>
            </div>

        </div>
        </InnerLayout>

    </Container>
  )
}

export default ChartSection
const Container = styled.div`
    padding:5rem 18rem;
    
    .chart-con{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        @media screen and (max-width:1347px) {
          grid-template-columns:repeat(1, 1fr);
        }
        .chart-left{
            width:80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats-money{
                display:flex;
                padding-bottom:1.3rem;
                justify-content:space-between;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius:62px;
                    width:100%;
                }
            }
        }
        .chart-right{
            padding-left:2rem;
            p{
                padding:1.3rem 0;
            }
        }

    }
`;
