import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ func }) => {
  return (
    <>
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
            <button onClick={func}>Library</button>
          </div>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Header;
