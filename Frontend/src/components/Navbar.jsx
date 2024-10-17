import React from 'react'
import logo from '../assets/image/logo.png'
import man from '../assets/image/men-icon.png'
import heart from '../assets/image/hearth.png'
import cart from '../assets/image/shop-cart.png'
import vector from '../assets/image/vector.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
    <nav className='nav-container'>
        <div className="logo Container">
          <img src={logo} alt="" />
        </div>
        
        <ul className='nav-content'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='icon-container Container'>
        <img src={man}></img>
           <img src={vector}></img>
           <img src={heart}></img>
           <img src={cart}></img>
        </div>


    </nav>
    </header>
  )
}

export default Navbar