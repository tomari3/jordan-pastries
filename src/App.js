import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/content/Home";
import Products from "./components/content/Products";
import { Cart } from "./components/content/Cart.js";
import { useState } from "react";
import "./app.css";

function App() {
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="app-wrapper">
        <Router>
          <Header func={() => setCart(!cart)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/messages/:id" element={<Book />} /> */}
          </Routes>
        </Router>
      </div>
      <Cart show={cart ? "" : "show"} />
    </>
  );
}

export default App;
