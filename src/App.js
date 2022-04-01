import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/content/Home";
import Products from "./components/content/Products";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home name={"Jordan's"} desc={"homemade konditorey"} />}
          />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
