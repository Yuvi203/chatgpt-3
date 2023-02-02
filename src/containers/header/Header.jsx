import React, {useState} from 'react';
import ai from '../../assets/ai.png';
import './header.css';
import { Navbar } from '../../components';
import { Fade } from 'react-reveal';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import { auth } from '../../firebase';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  

  const SignIn = async () =>{
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }
   
  return(
<>
<Fade top >
<Navbar/>
</Fade>
  <div className="gpt3__header " id="home">
    <Fade left>
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
    <p>GPT-3 is a powerful new language model developed by OpenAI. It is the largest and most advanced language model ever created, with over 175 billion parameters.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <button type="button" >Get Started</button>
      </div>
      <div className='cont'>
          <span className='or gradient__text'>Or</span>
          <button className='but' onClick={SignIn}>Sign in with Google</button>
      </div>
    </div>
    </Fade>
    <Fade right>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
    </Fade>
  </div>
  </>
  )
}

export default Header;


