import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import img from '../Assets/product_31_.png'

export const Hero = () => {
  
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className="hero-hand-icon">
            <p>Hello</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>Welcome to</p>
        <p>e-Shop</p>
      </div>
      
      <div className="hero-right">
        <img src={img} alt="hero-img"/>
      </div>
    </div>
  )
}
