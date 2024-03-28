import React from 'react'
import Banner from './Banner'
import HomeCategry from './HomeCategry'
import CategryShowCase from './CategryShowCase'
import Register from './Register'
import Location from './Location'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  
  return (
    <div>
      <Banner/>
      <HomeCategry/>
      <CategryShowCase/>
      <Register/>
      <Location/>
      <AboutUs/>
      <AppSection/>
     <Sponsor/>
    </div>
  )
}

export default Home
