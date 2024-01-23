import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import axios from "axios";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  let products = [];
//   const [cartProduct, setCartProduct] = useState(products);
  const [cartProduct, setCartProduct] = useState([]);


  const addToCart = (itemId, name, new_price) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    console.log(cartItems);

    let cart_items = {
      itemId,
      name,
      new_price,
    };

    
    axios
      .post("http://localhost:1337/api/v1/addproducts", cart_items)
      .then((response) => {
        console.log("cart items sent suceesfully", response);
      })
      .catch((error) => {
        console.log("error while sending cart items", error);
      });
  };

  const getProductDetails =async  () => {
  await  axios
      .get("http://localhost:1337/api/v1/getdata")
      .then((response) => {
        products.push(response.data);
        setCartProduct(products);
      })
      .catch((error) => {
        console.log(error, "error in GET method");
      });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
      return totalItem;
    }
  };

  const contextValue = {
    getTotalCartItems,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    cartProduct,
    getProductDetails
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
