import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ name, desc }) => {
  return (
    <main data-testid="home">
      <div>
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <Link to="/products">→</Link>
      </div>
    </main>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Home;
