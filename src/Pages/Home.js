import React from 'react'
import { WhatGPT3, Possibility, Footer, } from '../containers'
import { CTA } from '../components'
import Otherdesign from '../containers/Otherdesign'

const Home = () => {
  return (
    <div>
         <WhatGPT3/>
     <Possibility/>
     <CTA/>
     <Otherdesign/>
     <Footer/>
    </div>
  )
}

export default Home