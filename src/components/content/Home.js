import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <main data-testid="home">
      <div>
        <h1>Jordan&apos;s</h1>
        <p>homemade konditorey</p>
      </div>
      <div>
        <Link to="/products">→</Link>
      </div>
    </main>
  );
};

export default Home;
