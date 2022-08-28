import React from 'react'
import CardSection from './Components/CardSection'
import ChartSection from './Components/ChartSection'
import FAQSection from './Components/FAQSection'
import FooterSection from './Components/FooterSection'
import Header from './Components/Header'
import MessagingSection from './Components/MessagingSection'
import PaymentSection from './Components/PaymentSection'
import {OuterLayout} from './Layout'
import {Fade} from 'react-reveal'

const App = () => {
  return (
    <div>
      <Header/>
        <main>
          <Fade left>
          <CardSection/>
          </Fade>
          <Fade right>
          <ChartSection/>
          </Fade>
          <Fade left>
          <MessagingSection/>
          </Fade>
          <Fade right>
          <PaymentSection/>
          </Fade>
          <Fade left>
          <FAQSection/>
          </Fade>
        </main>
      <Fade bottom>
      <FooterSection/>
      </Fade>
    </div>
  )
}

export default App