import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import all_product from '../Assets/all_product'


export const Navbar = () => {

    const[menu,setMenu]=useState("Home");
    const[searchTerm,setSearchTerm]=useState("");
    const refresh = () => window.location.reload(true);

  return (
    <div className='navbar' style={{display:"block"}}>
    <div style={{display:"flex"}}>
        <div className="nav-logo">
            <img src={logo} alt="e-Shop_logo"/>
            <p>e-Shop</p>
        </div>
        <div>
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to='/Home'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
          </ul>
        </div>
        <div style={{marginTop:"2%",marginLeft:"100px",}}>
      
          <input id='searchinputtag' type='text' 
          placeholder='search here...' onChange={(event)=> setSearchTerm(event.target.value)}
            style={{borderRadius:"10px",height:"60%"}}
          />
          
        </div>
        <div className="nav-cart" style={{marginLeft:"100px"}}> 
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        </div>
    </div>
    <div className="template-contain" style={{marginTop:"5%",marginLeft:"0px"}}>
           {
            all_product.filter((val)=>{
              if(searchTerm==="")
              {
                  return "";
              }
              else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
              {
                      return val;
              }
            }
            )
            .map((val)=>{
              return(
                <div>
              <div key={val.id} className='template' onClick={refresh}>
                <Link to={`/product/${val.id}`}><img src={val.image} alt=""/ ></Link>
                <br/>
                <h3>{val.name}</h3>
                <br/>
                <p>₹{val.new_price}</p>
              </div>
            
        </div>
              )
            })
          }
            
    </div>
    </div>
            
            
            
          
      
       
        
  )
}
