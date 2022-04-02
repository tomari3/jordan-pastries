import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/content/Home";
import Products from "./components/content/Products";
import "./app.css";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/messages/:id" element={<Book />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
