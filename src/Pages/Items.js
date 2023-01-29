import { Avatar } from '@mui/material'
import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Article } from '../components'
import {blog01,blog02, blog03, blog04,blog05} from "../containers/blog/imports"
import { auth } from '../firebase'
import {Fade} from "react-reveal"

const Items = () => {
  const picUrl = auth.currentUser.photoURL
  const username = auth.currentUser.displayName
  const navigate = useNavigate()

const SignOut = async () =>{
 await signOut(auth)
 navigate('/')
}
  return (
      <Container>
        <div className='avatar'>
        <Avatar src={picUrl}/>
        <p className='user-name'>{username}</p>
        </div>
        <div className='but-con'>
        <button className='but' onClick={SignOut}>Sign out</button>
        </div>
      <div className="gpt3__blog-heading">
        <Fade top>
        <h1 className="gradient__text">What we offer</h1>
        </Fade>
      
    </div>
    <div className='box-con'>
      <div className='box-pos'>
        <Fade left>
        <Link to={"/features/Aichat"}>
        <Article imgUrl={blog04} text="AI assitance"/>
        </Link>
        <Link to={"/features/Dalle"}>
        <Article imgUrl={blog02} text="Generate Image using dall-e"/>
        </Link>
        </Fade>
        <Fade right>
      <Link to={"/features/QandA"}>
      <Article imgUrl={blog03} text="Q&A"/>
      </Link>
      <Link to={"/features/grammercorrection"}>
      <Article imgUrl={blog04} text="Grammer correction"/>
      </Link>
      </Fade>
      <Fade left>
      <Link to={"/features/Englishtoother"}>
      <Article imgUrl={blog05} text="English to other languages"/>
      </Link>
     <Link to={"/features/explaincode"}>
     <Article imgUrl={blog03} text="Explain code"/>
     </Link>
     </Fade>
     <Fade right>
     <Link to={"/features/Translateprogramming"}>
     <Article imgUrl={blog02} text="Translate programming languages"/>
     </Link>
      <Link to={"/features/friendchat"}>
      <Article imgUrl={blog03} text="Friend chat"/>
      </Link>
     </Fade>
      </div>
    </div>
      </Container>
  )
}

export default Items

const Container = styled.div`
  padding:2rem;
  display:flex;
  flex-direction:column;
.gpt3__blog-heading{
  width: 100%;
    text-align: center;
    margin-bottom: 5rem;
    h1 {
    font-size: 52px;
    line-height: 65px;
    font-family: var(--font-family);
    font-weight: 700;
}
}
.box-con{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  margin-top:-40px;
  padding:0 1rem;
}
.box-pos{
  

  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:2rem;
  padding:1rem;
  text-align:center;

}

.avatar{
  position:absolute;
  right: 12%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.but-con{
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
}
.user-name{
  color: #fff;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
}
`;


