import React, { useState } from 'react'
import {MainLayout, InnerLayout} from "../styles/Layouts"
import Title from "../Components/Title"
import Button from '../Components/Button'
import portfolios from '../data/portfolios'
import Menu from '../Components/Menu'

const allButtons = ['All', ...new Set(portfolios.map((item)=> item.category))]

const PortfoloioPage = () => {
  const [menuItem , setMenuItem] = useState(portfolios)
  const [buttons, setButtons] = useState(allButtons);

  const filter = (button) =>{
    if(button === 'All'){
         setMenuItem(portfolios);
         return;
    }
    const filteredData = portfolios.filter(item => item.category === button);
    setMenuItem(filteredData);
  }
  return (
    <MainLayout>
      <Title title={'Portfolios'} span={'Portfolios'}/>
      <InnerLayout>
        <Button filter={filter} button={buttons}/>
        <Menu menuItem={menuItem}/>
      </InnerLayout>
    </MainLayout>
  )
}

export default PortfoloioPage