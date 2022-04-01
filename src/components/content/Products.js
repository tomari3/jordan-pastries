import React from "react";

const ProductsCard = () => {
  return (
    <div>
      <p>card</p>
    </div>
  );
};

const ProductsGallery = () => {
  return (
    <div>
      <ProductsCard />
    </div>
  );
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
  return (
    <main data-testid="products">
      <div>
        <h1>All Products</h1>
        <p>cant decide?</p>
      </div>
      <ProductsFilterSort />
      <ProductsGallery />
    </main>
  );
};

export default Products;
