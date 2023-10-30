import { BusinessAccount, Footer, Functions, Hero, Promotion } from '@components'
import Navbar from '@components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Functions/>
      <BusinessAccount/>
      <Promotion/>
      <Footer/>
    </main>
  )
}

export default Home