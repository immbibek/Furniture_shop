
import React from 'react'
import "./Browse.css"
import dining from '../assets/image/Dining.png'
import bedroom from '../assets/image/bedroom.png'
import living from '../assets/image/livingRoom.png'
const Browse = () => {
  return (
    <div className='browse-container'>
      <div className="top-box">
        <h1>Browse The Range </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="bottom-box">
        {/* card1 */}
        <div className='cards'>
            <img src={living} alt="Dining" />
            <p>Living</p>
        </div>
        <div className='cards'>
            <img src={dining} alt="Dining" />
            <p>Dining</p>
        </div>
        <div className='cards'>
            <img src={bedroom} alt="bedroom" />
            <p>Bedroom</p>
        </div>
      </div>
        
      
    </div>
  )
}

export default Browse
