import React from 'react'
import './Product.css'
import chair from "../assets/image/chair.png"
import sofa1 from "../assets/image/sofa1.png"
import sofa2 from "../assets/image/sofa2.png"
import lamp from "../assets/image/lamp.png"
import sofa3 from "../assets/image/sofa3.png"
import sofa4 from "../assets/image/sofa4.png"
import table from '../assets/image/table.png'
const Product = () => {
  return (
    <div className='product-container'>
        <div className='Title'>
            <h1>Products</h1>

        </div>
        {/* card 1 */}
        <div className='product-cards'>
            <div className='cards'>
           <img src={chair} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
           </div>
      
        
          <div className='cards'> 
           <img src={sofa1} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
         </div>
        {/* card 2 */}
        
          <div className='cards'>
           <img src={sofa2} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
        </div>
        {/* card 3 */}
        <div className='cards'>
           <img src={sofa3} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
        </div>
        {/* card 4 */}
        <div className='cards'>
           <img src={lamp} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
        </div>
        {/* card 5 */}
        <div className='cards'>
           <img src={sofa4} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
        </div>
        {/* card 6 */}
        <div className='cards'>
           <img src={table} alt="" />
           <div className="details">
            <p className='main-title'>Liviosa</p>
            <p className='desc'>Stylidh cafe chair</p>
            <span>$40</span>
            
           </div>
        </div>
        </div>
      
    </div>
  )
}

export default Product
