import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

const BlogCard = ({name, title, subtext, image, date}) => {
    const theme = useTheme();
  return (
    <Container theme={theme}>
        <div className='image'>
            <img src={image} alt=''/>
            <div className='image-content'>
                <div className='left-con'>
                <i className='fas fa-tag'></i>
                    <span>{name}</span>
                </div>
                <div className='right-con'>
                <i class='fas fa-clock'></i>
                    <span>{date}</span>
                </div>
               
            </div>
            </div>
            <div className='blog-text'>
                <h5>{title}</h5>
                <p>{subtext}</p>
                <div className='blog-icons'>
                     <p>
                        Share:
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-youtube"></i>
                    </p>

                </div>

            </div>
    </Container>
  )
}

export default BlogCard
const Container = styled.div`
    background-color:${props => props.theme.colorGreyLight};
    border-radius:7px;
    border:2px solid ${props => props.theme.colorGrey9};
    transition:all .4s ease-in-out;
    cursor: pointer;
    font-size:1rem;
    :hover{
        box-shadow: 10px 10px 0px #f8f9fa14;
        transform:translateY(-5px);
    }
    .image{
        position:relative;
        img{
            width: 100%;
            object-fit:cover;
            height: 220px;
            border-top-right-radius:7px;
            border-top-left-radius:7px;
        }
        .image-content{
            position:absolute;
            background:${props => props.theme.colorGradientPrimary3};
            width: 85%;
            left: 50%;
            bottom:-13px;
            transform:translateX(-50%);
            color:white;
            display:flex;
            align-items:center;
            justify-content:space-between;
            border-radius:30px;
            padding:.5rem 1rem;
            span{
               margin-left:5px;
            }
            
        }
    }
    .blog-text{
        padding-left:2rem;
        padding-right:2rem;
        padding-top:3rem;
        padding-bottom:3rem;
        h5{
            font-size:1.5rem;
            padding-bottom:1.5rem;
            color:${props => props.theme.colorFont};
            cursor:pointer;
            transition:all .4s ease-in-out;
            :hover{
                color:${props => props.theme.colorAccent};
            }
        }
        p{
            padding-bottom:1.5rem;
            font-size:1.2rem;
        }
        .blog-icons{
            display:flex;
            align-items:center;
            padding-top:1.5rem;
            border-top:1px solid ${props => props.theme.colorGrey9};
            i{
                margin:0 .3rem;
                cursor:pointer;
                font-size:1.2rem;
            }
        }
    }
`;
