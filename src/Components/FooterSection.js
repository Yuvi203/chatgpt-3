import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layout'
import logo from '../img/logo.svg'

const FooterSection = () => {
  return (
    <Container>
        <InnerLayout>
            <div className='footer-con'>
                <div className='logo-con'>
                    <img src={logo} alt=''/>
                    <p>
                     Copyright @2021 LoremIpsum. <br />
                     All rights reserved.
                    </p>
                </div>
                <ul className='nav'>
                <div className="links1">
                           <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                </ul>
            </div>
        </InnerLayout>
    </Container>
  )
}

export default FooterSection
const Container = styled.div`
    padding:5rem 18rem;
    background-color:#dce2f0;
    .footer-con{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        .logo-con{
          
            img{
                width: 90px;
            }
        }
        .nav{
            display:flex;
            justify-content:space-between;
            li{
                padding:2rem 0;
                color:#16194f;
            }
        }
    }
`;
