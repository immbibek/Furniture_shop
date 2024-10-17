import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Browse from '../components/Browse'
import Product from '../components/Product'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Browse/>
      <Product/>
    </div>
  )
}

export default Home
