import React from 'react'
import styled from 'styled-components'
import {useTheme} from "../context/themeContext"
import agency3 from '../img/agency3.jpg'
import agency4 from '../img/agency4.jpg'
import Button from './Button'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'


const Header = () => {
    const theme = useTheme()
  return (
    <Container theme={theme}>
        <nav className='nav'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>
            <ul className='nav-items'>
                <li className='nav-item'>
                <a  href="#" className='active-menu'>Home</a>
                </li>
                <li className='nav-item'>
                <a  href="#">About</a>
                </li>
                <li className='nav-item'>
                <a  href="#">Gallery</a>
                </li>
                <li className='nav-item'>
                <a  href="#">Services</a>
                </li>
                <li className='nav-item'>
                <a  href="#">Portfolio</a>
                </li>
                <li className='nav-item'>
                <a  href="#">News</a>
                </li>
                <li className='nav-item'>
                <a  href="#">Contact</a>
                </li>
            </ul>
            <div className='nav-btn'>
            <Button
             name={'Get Started'}
             icon={'fas fa-chevron-right'}
             arrow={'arrow'}
             blob={'blob'}
            />
            </div>
        </nav>
        <div className='header-content'>
            <LeftContainer/>
            <RightContainer/>
        </div>
        <div className='mouse'>
            <span></span>
        </div>
    </Container>
  )
}

export default Header
const Container = styled.div`
min-height:100vh;
position:relative;
.nav{
    display:grid;
    grid-template-columns:100px 1fr auto;
    padding:1rem 2rem;
    border-bottom:1px solid ${props => props.theme.colorGrey9};
    animation:navHide 1s ease-in-out;
    @keyframes navHide {
        0%{
            transform:translateY(-100%);
            opacity:0;
        }
        100%{
           transform:translateY(0) scaleY(1);
            opacity:1;
            //visibility:visible;
        }
    }
    .logo{
        display:flex;
        align-items:center;
        color:white;

    }
    .nav-items{
        display:flex;
        align-items:center;
        justify-content:flex-end;
        margin-right:4rem;
        .nav-item{
            margin:0 .7rem;
            a{
                text-transform:uppercase;
                font-size:1rem;
                font-weight:400;
                padding: .8rem;
                position:relative;
                ::before{
                  content:'';
                  position:absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: ${props => props.theme.colorGradientPrimary2};
                  border-radius:30px;
                  z-index:-1;
                  transform:scale(0);
                  transition:all .4s ease-in-out;
                } 
                :hover{
                    &::before{
                       transform:scale(1);
                    }
                }
            }
             
               
        }
    }
}
.header-content{
   display:grid;
   grid-template-columns:repeat(2, 1fr);
   grid-row-gap:2rem;
   padding:5rem 7rem;
}
.mouse{
    position:absolute;
    width: 30px;
    height: 45px;
    border-radius:30px;
    border:2px solid ${props  => props.theme.colorWhite};
    left: 50%;
    bottom: 3%;
    transform:translateX(-50%);
    pointer-events:none;
    span{
        position:absolute;
        width: 6px;
        height: 6px;
        border-radius:50%;
        background-color:${props => props.theme.colorWhite};
        left: 50%;
        top: 50%;
        transform:translate(-50%, -50%);
        animation: upDown 1s infinite;
        @keyframes upDown {
            0%{
                transform:translateY(-13px) translateX(-50%) scale(1.3);
            }
            10%{
                transform:translateY(-13px) translateX(-50%) scale(1.3);
            }
            50%{
                transform:translateY(10px) translateX(-50%) scale(1);
            }
            100%{
                transform:translateY(-13px) translateX(-50%) scale(1);
            }
        }
    }
}
`