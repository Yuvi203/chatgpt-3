import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import project_management from '../img/icons/project_management.svg'
import team_management from '../img/icons/team_management.svg'
import box from '../img/box.svg'
import agency1 from '../img/agency1.jpg'


const About = () => {
    const theme = useTheme()
  return (
    <Container theme={theme}>
        <div className='left'>
            <h3 className='title'>
               About Our Agency
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at,
             nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?
            </p>
            <div className="about-info">
                    <div className="about-info-item">
                        <div className="icon">
                            <img src={project_management} alt="" />
                        </div>
                        <div className="text-con">
                            <h5>
                                Project Management
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="about-info-item">
                        <div className="icon">
                            <img src={team_management} alt="" />
                        </div>
                        <div className="text-con">
                            <h5>
                                Team Management
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
      </div>
        <div className='right'>
            <img src={agency1} className="about-img" alt=''/>
            <img src={box} alt='' className='box-img'/>
        </div>
    </Container>
    )
    }

export default About
const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:2rem;
    padding:5rem 7rem;
    .left{
        .title{
            color:white;
            //font-size:2rem;
            //font-weight:500;
        }
        p{
            padding:2rem 0;
            line-height:1.6rem;
        }
    }
.about-info{
.about-info-item{
    display:grid;
    grid-template-columns:120px auto;
    margin-bottom:1.5rem;
    p{
        padding:.6rem 0;
    }
    h5{
        color:white;
        font-size:1.3rem;
    }
    .icon{
        background-color:${props => props.theme.colorWhite};
        display:flex;
        align-items:center;
        justify-content:center;
        align-self:flex-start;
        margin-right:1rem;
        padding:1rem;
        border-radius:7px;
    }

}
}
.right{
    position:relative;
    display:flex;
    justify-content:flex-end;
    .about-img{
        width: 90%;
        object-fit:cover;
        height: 500px;
        border-top-left-radius:70px;
        border-bottom-right-radius:70px;
        border-top-right-radius:3px;
        border-bottom-left-radius:3px;
        transition: all .3s ease-in-out;
        :hover{
            transform:scale(1.05);
        }
    }
    .box-img{
        position:absolute;
        left: 3%;
        top:-8%;
        animation:scaleUp 8s infinite;
        @keyframes scaleUp {
            0%{
                transform:scale(1);
            }
            50%{
                transform:scale(1.2);
            }
            100%{
                transform:scale(1);
            }
        }
    }
}
`;
