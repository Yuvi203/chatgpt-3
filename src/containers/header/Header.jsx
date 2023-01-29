import React, {useState} from 'react';
import ai from '../../assets/ai.png';
import './header.css';
import { Navbar } from '../../components';
import { Fade } from 'react-reveal';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState("");
  const SignIn = async () =>{
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }
   const login = async () =>{
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail
    )
    console.log(user)
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
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" value={loginEmail} onChange={(e)=>{
          setLoginEmail(e.target.value)
        }}/>
        <button type="button" onClick={login}>Get Started</button>
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


