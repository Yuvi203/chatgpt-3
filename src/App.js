import React, { lazy, Suspense } from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Feature } from './components';
import {BrowserRouter,  Route, Routes, Router} from 'react-router-dom'
import './App.css';
import Logo from './Logo';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import styled from 'styled-components';
import Register from './pages/Register';

const Homepage = lazy(()=> import("./pages/Home"))
const Featurespage = lazy(()=> import("./pages/Items"))
const Aipage = lazy(()=> import("./pages/Ai"))
const ExplainCodepage = lazy(()=> import("./pages/ExplainCode"))
const TranslateProgrammingpage = lazy(()=> import("./pages/TranslatePrograme"))
const GenerateImagepage = lazy(()=> import("./pages/GenerateImage"))
const BugFixerpage= lazy(()=> import("./pages/BugFixer"))
const GenerateCodepage = lazy(()=> import("./pages/GenerateCode"))
const CreateNotespage = lazy(()=> import("./pages/CreateNotes"))
const QApage = lazy(()=> import("./pages/QA"))

const App = () =>{
  const [user] = useAuthState(auth)
  return(
  <div className="App">
    <div className="gradient__bg">
    {!user ? <>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/login' element={<div className='bg'><Register/></div>}/>
    </Routes>
    </> : (
  <>
  <Suspense fallback={<Div className='bg'>
    <h2 className="gradient__text">Loading..</h2>
        <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>l
  </Div>}>
  <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/features' element={<div className='bg'><Featurespage/></div>}/>
        <Route path='/features/Aichat' element={<div className='bg'><Aipage/></div>}/>
        <Route path='/features/Dalle' element={<div className='bg'><GenerateImagepage/></div>}/>
        <Route path='/features/QandA' element={<div className='bg'><QApage/></div>}/>
        <Route path='/features/bugfixer' element={<div className='bg'><BugFixerpage/></div>}/>
        <Route path='/features/studynotes' element={<div className='bg'><CreateNotespage/></div>}/>
        <Route path='/features/explaincode' element={<div className='bg'><ExplainCodepage/></div>}/>
        <Route path='/features/generatecode' element={<div className='bg'><GenerateCodepage/></div>}/>
        <Route path='/features/Translateprgramminglanguages' element={<div className='bg'><TranslateProgrammingpage/></div>}/>
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

