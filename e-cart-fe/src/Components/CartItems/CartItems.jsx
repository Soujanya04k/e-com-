import React, { useContext, useEffect, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const {
    all_product,
    cartItems,
    removeFromCart,
    cartProduct,
    getProductDetails,
  } = useContext(ShopContext);

  useEffect(() => {
   if(cartProduct){
    getProductDetails();
   }
  },[]);

  

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Title</p>
        <p>Price</p>

        <p>Remove</p>
      </div>
      <hr />
      {cartProduct.length > 0 &&
        cartProduct[0].map((e) => {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main">
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
