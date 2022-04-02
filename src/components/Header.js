import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header data-testid="header" className="app_header">
      <nav className="app_header_nav">
        <div className="app_header_nav_left">
          <Link className="app_header_nav_home" to="/">
            Home
          </Link>
          <Link className="app_header_nav_products" to="/products">
            Products
          </Link>
        </div>
        <div className="app_header_nav_right">
          <Link className="app_header_nav_cart" to="/cart">
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
