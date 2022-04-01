import React, { useEffect, useState } from "react";
import { item } from "./example";
import PropTypes from "prop-types";

const ProductsCard = ({ title, image, author }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <img src={image} height={100} width={100} />
    </div>
  );
};

ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  author: PropTypes.string.isRequired,
};

const ProductsGallery = () => {
  const cardList = item.results.map((i) => {
    return (
      <ProductsCard
        key={i.id}
        title={i.title}
        author={i.authors[0].name}
        image={i.formats["image/jpeg"]}
      />
    );
  });
  return <div>{cardList}</div>;
};

const ProductsFilterSort = () => {
  return (
    <div>
      <div>
        <ul>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
        </ul>
      </div>
      <div>
        <span>sort</span>
      </div>
    </div>
  );
};

const Products = () => {
  console.log(item);
  return (
    <main data-testid="products">
      <div>
        <h1>All Products</h1>
        <p>cant decide?</p>
      </div>
      <div>
        <ProductsFilterSort />
        <ProductsGallery />
      </div>
    </main>
  );
};

export default Products;
