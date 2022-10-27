import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layouts'
import styled from 'styled-components'
import blogs from '../data/blog'

const BlogPage = () => {
  return (
    <MainLayout>
      <BlogStyled>
        <Title title={'Blogs'} span={'Blogs'}/>
        <InnerLayout className='blog'>
          {
            blogs.map((blog)=>{
              return <div key={blog.id} className='blog-item'>
                <div className='image'>
                  <img src={blog.image} alt=''/>
                </div>
                <div className='title'>
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </div>

              </div>

            })
          }
        
        </InnerLayout>

      </BlogStyled>
    </MainLayout>
  )
}

export default BlogPage

const BlogStyled = styled.div`
  .blog{
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    grid-column-gap:2rem;
    grid-row-gap:3rem;
    @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
  }
  .blog-item{
    background-color:var(--background-dark-grey);
    padding:1rem 1rem;
  }
  .image{
    width: 100%;
    padding-bottom:.5rem;
    overflow:hidden;
    img{
      height: 90%;
      width: 100%;
      object-fit:cover;
      transition:all .4s ease-in-out;
      :hover{
        cursor: pointer;
        transform:rotate(3deg) scale(1.1);
      }
    }
  }
  .title{
    a{
      font-size:1.4rem;
      padding:2rem 0;
      color:var(--white-color);
      cursor:pointer;
      transition:all .4s ease-in-out;
      :hover{
        color:var(--primary-color);
      }
    }
  }
`;
