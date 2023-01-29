import React, { lazy, Suspense } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Feature } from './components';
import {BrowserRouter,  Route, Routes, Router} from 'react-router-dom'
import './App.css';
import Logo from './Logo';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import styled from 'styled-components';

const Homepage = lazy(()=> import("./pages/Home"))
const Featurespage = lazy(()=> import("./pages/Items"))
const Aipage = lazy(()=> import("./pages/Ai"))
const ExplainCodepage = lazy(()=> import("./pages/ExplainCode"))
const FriendChatpage = lazy(()=> import("./pages/FriendChat"))
const GenerateImagepage = lazy(()=> import("./pages/GenerateImage"))
const GrammerCorrectionpage = lazy(()=> import("./pages/GrammerCorrection"))
const TranslateProgrammingpage = lazy(()=> import("./pages/TranslateProgramming"))
const Languagepage = lazy(()=> import("./pages/Language"))
const QApage = lazy(()=> import("./pages/QA"))

const App = () =>{
  const [user] = useAuthState(auth)
  return(
  <div className="App">
    <div className="gradient__bg">
    {!user ? <>
    <Header/>
    </> : (
  <>
  <Suspense fallback={<Div className='bg'>
    <h2 className="gradient__text">Loading..</h2>
        <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
  </Div>}>
  <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/features' element={<div className='bg'><Featurespage/></div>}/>
        <Route path='/features/Aichat' element={<div className='bg'><Aipage/></div>}/>
        <Route path='/features/Dalle' element={<div className='bg'><GenerateImagepage/></div>}/>
        <Route path='/features/QandA' element={<div className='bg'><QApage/></div>}/>
        <Route path='/features/grammercorrection' element={<div className='bg'><GrammerCorrectionpage/></div>}/>
        <Route path='/features/Englishtoother' element={<div className='bg'><Languagepage/></div>}/>
        <Route path='/features/explaincode' element={<div className='bg'><ExplainCodepage/></div>}/>
        <Route path='/features/Translateprogramming' element={<div className='bg'><TranslateProgrammingpage/></div>}/>
        <Route path='/features/friendchat' element={<div className='bg'><FriendChatpage/></div>}/>
    </Routes>
    </Suspense>
  </>
)}
    </div>
  </div>
  )
}

export default App;

const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`;

