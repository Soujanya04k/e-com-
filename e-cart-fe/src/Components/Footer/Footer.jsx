import React from 'react'
import './Footer.css';
import eShop_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


export const Footer = () => {

  return (
    <div className='footer0'>
        <hr/>
    <div className='footer'>
    <div className='footer-logo'>
        <img src={eShop_logo} alt="eShop-logo"/>
        <p>e-Shop</p>
    </div>
    
        <ul className="footer-links">
            <li>Comapny</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>

            </div>
          
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
                
            </div>
        </div>
   <div className='footer-copyright'>
    <hr/>
    <p>Copyright @ 2023 - All Rights Reserved</p>
   </div>
    </div>
    </div>
  )
}
