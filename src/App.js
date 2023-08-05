import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Category from './Component/Category'
import Deals from './Component/Deals'
import What from './Component/Whats'
import Delivery from './Component/Delivery'
import Account from './Component/Account'
import Home from './Component/Home'
import { useState ,useEffect} from 'react';
import ProductItem from './Component/ProductItem';

const App = () => {
    const [cartItem, setCartitem] = useState([]);

    const handleAddtoCart = (product) => {
      console.log(product);
      setCartitem((prevCartItems) => [...prevCartItems, product]);
    };


  const handleDeleteItem = (itemId) => {
    setCartitem((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };


useEffect(() => {
  console.log("Updated cart items:", cartItem);
}, [cartItem]);







  return (
    <>
      <div
        className="main-heading"
        style={{
          width: "100%",
          backgroundColor: "#006400 ",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "#fff" }}>
          <CallIcon /> +919555593907
        </div>
        <div style={{ color: "#fff" }}>
          Get 50% off on selected item | Shop Now
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "10px",
          }}
        >
          <div style={{ color: "#fff" }}>
            Eng <KeyboardArrowDownIcon />
          </div>
          <div style={{ color: "#fff" }}>
            Location <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route
              path="/deal"
              element={<Deals AddtoCart={handleAddtoCart} />}
            ></Route>
            <Route path="/what" element={<What />}></Route>
            <Route path="/deliver" element={<Delivery />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route
              path="/product"
              element={
                <ProductItem cartItem={cartItem} onDelete={handleDeleteItem} />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
