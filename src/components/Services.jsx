import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
const services = () => {
  return (
    <div className>
     <Carousel 
     infiniteLoop
      autoPlay
       showStatus ={false} 
       interval ={3000}
       showThumbs ={false}>
      <div>
        <img src={img1} alt="Item1" />
        <p className='legend'>FULL Stack web Development</p>
      </div>

      <div>
        <img src={img2} alt="Item2" />
        <p className='legend'>Peer-to-peer Support</p>
      </div>
     </Carousel>
    </div>
  )
}

export default services