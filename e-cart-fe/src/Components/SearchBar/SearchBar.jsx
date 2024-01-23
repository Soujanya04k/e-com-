import React from 'react'
import all_product from '../Assets/all_product';
import { useState } from 'react';
import './SearchBar.css'
import { Navbar } from '../Navbar/Navbar';

export const SearchBar = () => {
  const[searchTerm,setSearchTerm]=useState("");
    return (
    <div>
       <Navbar/>
      <input id='searchinputtag' type='text' 
          placeholder='search here...' onChange={(event)=> setSearchTerm(event.target.value)}/>
      
        <div className="template-contain">
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
                 <div key={val.id} className='template'>
                <a href={`/product/${val.id}`} target="_blank"><img src={val.image} alt="" target="_blank"/></a>
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
};
