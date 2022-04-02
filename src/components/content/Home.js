import React from "react";
import { Link } from "react-router-dom";

const Home = ({}) => {
  return (
    <main data-testid="home" className="app_home">
      <div className="app_home_greeting">
        <p>
          This project was created using the{" "}
          <a href="https://gutendex.com/">Gutendex</a> API which utilizes the
          awesome <a href="https://www.gutenberg.org/">Project Gutenberg</a>
        </p>
        <p>from their website : </p>
        <blockquote>
          Project Gutenberg is a library of over 60,000 free eBooks Choose among
          free epub and Kindle eBooks, download them or read them online. You
          will find the world’s great literature here, with focus on older works
          for which U.S. copyright has expired. Thousands of volunteers
          digitized and diligently proofread the eBooks, for you to enjoy.
        </blockquote>
        <p>
          this project gives an easy way to interact with the Gutenberg Project.
          It was created using ReactJS.
        </p>
        <div className="app_home_greeting_links">
          <a href="https://github.com/tomari3/jordan-pastries">github</a>
          <a href="https://www.linkedin.com/in/tom-ari-72034122a/">linkedin</a>
          <a href="mailto: tom_ari@ymail.com">email</a>
        </div>
      </div>

      <Link to="/products" className="app_home_arrow">
        &#x3e;
      </Link>
    </main>
  );
};

export default Home;
