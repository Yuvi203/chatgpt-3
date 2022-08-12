import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SectionCategory from './Components/SectionCategory'
import SectionDownload from './Components/SectionDownload'
import SectionJobs from './Components/SectionJobs'
import SectionService from './Components/SectionService'
import SectionStaff from './Components/SectionStaff'
import Subscribe from './Components/Subscribe'


const App = () => {
  return (
    <div>
      <Header/>
      <SectionCategory/>
      <SectionJobs/>
      <SectionService/>
      <SectionStaff/>  
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
