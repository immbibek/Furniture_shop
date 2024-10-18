import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Browse from '../components/Browse'
import Product from '../components/Product'
import Explore from '../components/Explore'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Browse/>
      <Product/>
      <Explore/>
    </div>
  )
}

export default Home
