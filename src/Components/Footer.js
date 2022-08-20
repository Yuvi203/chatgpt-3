import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

import team1 from '../img/team1.jpg'
import team2 from '../img/team2.jpg'
import css3 from '../img/css.png'
import agency4 from '../img/agency4.jpg'
import figma from '../img/figma.jpg'
import fitness from '../img/fitness.png'

const Footer = () => {
    const theme = useTheme()
  return (
    <Container theme={theme}>
        <nav className='nav'>
            <ul className='logo-con'>
                <div className='logo'>
                  <h1>LOGO</h1>
                </div>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Aperiam unde minima illum minus?
                </p>
                <div className='nav-icons'>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-youtube"></i>
                </div>
            </ul>
            <ul className='nav-b nav-contact'>
                <h4>Contact Us</h4>
                <li className='nav-item'>
                    <div className='icon'>
                    <i className="fas fa-envelope"></i>
                    </div>
                    <div className='f-text'>
                        <h6>Email</h6>
                        <span>yyuvistudent@gmail.com</span>
                    </div>
                </li>
                <li className="nav-item">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Phone</h6>
                            <span> +44 (0) 745-878-908</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="f-text">
                            <h6>Location</h6>
                            <span>
                                London, United Kingdom
                            </span>
                        </div>
                    </li>
            </ul>
            <ul className='nav-b company'>
                <h4>Company</h4>
                <li className='nav-item'>
                    <a href='#'>Contact</a>
                </li>
                <li className="nav-item">
                   <a href="#">Customer's FAQ</a>
                </li>
                <li className="nav-item">
                   <a href="#">Services</a>
                </li>
                <li className="nav-item">
                   <a href="#">Refund Policy</a>
                </li>
                <li className="nav-item">
                  <a href="#">Private Policy</a>
                </li>
                <li className="nav-item">
                  <a href="#">License & Copyright</a>
                </li>
            </ul>
            <ul className='nav-b ig'>
                <h4>Instagram</h4>
                <div className='ig-images'>
                <img src={team1} alt="" />
                <img src={team2} alt="" />
                <img src={css3} alt="" />
                <img src={agency4} alt="" />
                <img src={figma} alt="" />
                 <img src={fitness} alt="" />
                </div>

            </ul>

        </nav>
        <div className="footer-copywrite">
            <p>
               Copyright © 2022 <span>MacLinz Universal</span>. All rights reserved.
             </p>
        </div>

    </Container>
  )
}

export default Footer
const Container = styled.div`
    background-color:${props => props.theme.colorBg3};
    padding-top:6rem;
    color:${props => props.theme.colorFont};
    padding-bottom:3rem;
    padding:5rem 0;
    h6{
       font-size:1.2rem; 
    }
    h4{
        font-size:1.5rem;
        color:${props => props.theme.colorGrey4};
    }
    a{
        color:${props => props.theme.colorFont};
        transition:all .3s ease-in-out;
        :hover{
            color:${props => props.theme.colorAccent};
        }
    }
    i{
        font-size:1.3rem;
        transition:all .3s ease-in-out;
        :hover{
            color:${props => props.theme.colorAccent};
        }
    }
    h1{
        color:${props => props.theme.colorWhite};
        margin-bottom:1rem;
    }
    .nav{
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        grid-gap:2rem;
        padding-bottom:3rem;
        h4{
            padding-bottom:1.5rem;
        }
        .nav-b{
            margin:0 1.5rem;
            .nav-item{
                margin-bottom:1rem;
            }
        }
        .nav-contact{
            .nav-item{
                display:grid;
                grid-template-columns:30px auto;
            }
        }
        .logo-con{
           // flex:1;
            padding-left:2rem;
            p{
                //width:75%;
                margin:0;
            }
        }
        .nav-icons{
            display:flex;
            margin-top:2rem;
            .fa-facebook{
                margin-right:.3rem;
            }
           i:not(:first-child){
            margin:0 .5rem;
            cursor:pointer;
           }
        }
        .company{
            a{
                color:${props => props.theme.colorWhite};
                font-size:1.1rem;
                font-weight:400;
            }
        }
        .ig{
            .ig-images{
                display:grid;
                grid-template-columns:repeat(3, 90px);
                grid-template-rows:repeat(2, 90px);
                grid-gap:.5rem;
                img{
                    width: 100%;
                    object-fit:cover;
                    height: 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .footer-copywrite{
        padding-top:3rem;
        border-top:1px solid ${props => props.theme.colorGrey9};
        text-align:center;
        span{
            color:${props => props.theme.colorGrey4};
            cursor:pointer;
            transition: all .4s ease-in-out;
            :hover{
                color:${props => props.theme.colorAccent};
            }
        }
    }
`;
