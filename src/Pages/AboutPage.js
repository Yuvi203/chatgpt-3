import React from 'react'
import styled from 'styled-components'
import {MainLayout} from "../styles/Layouts"
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import ServiceSection from '../Components/ServiceSection'
import Reviews from '../Components/Reviews'

const AboutPage = () => {
  return (
    <MainLayout>
      <Container>
        <Title title={'About Me'} span={'About Me'}/>
        <ImageSection/>
        <ServiceSection/>
        <Reviews/>
      </Container>
    </MainLayout>

  )
}

export default AboutPage

const Container = styled.section``