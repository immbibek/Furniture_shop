import React, { useRef } from 'react';
import "./Explore.css";
import Ex_img from "../assets/image/Ex-img.png";
import forward from "../assets/image/right-arrow.png";

const Explore = () => {
   const slider = useRef(null);
   let tx = 0;

   const slideForward = () => {
       if (tx > -50) {
           tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
   };

   return (
     <div className='Ex-container'>
       <div className="left">
           <h1>50+ Beautiful rooms <br />
           inspiration</h1>
           <p>Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you</p>
           <button className='ex-btn'>Explore More</button>
       </div>

       <div className='right'>
           <div className="slider" ref={slider}>
               {/* 1st slide */}
               <div className='img-box'>
                   <img src={Ex_img} alt="Bedroom" />
                   <div className='content'>
                       <p>____Bedroom</p>
                       <h3>Inner Peace</h3>
                   </div>
               </div>

               {/* 2nd slide */}
               <div className='img-box'>
                   <img src={Ex_img} alt="Bedroom" />
                   <div className='content'>
                       <p>____Bedroom</p>
                       <h3>Inner Peace</h3>
                   </div>
               </div>

               {/* 3rd slide */}
               <div className='img-box'>
                   <img src={Ex_img} alt="Bedroom" />
                   <div className='content'>
                       <p>____Bedroom</p>
                       <h3>Inner Peace</h3>
                   </div>
               </div>
           </div>
       </div>

       <span className='arrow' onClick={slideForward}><img src={forward} alt="Forward Arrow" /></span>
    </div>
   );
};

export default Explore;
