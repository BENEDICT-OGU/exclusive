import React, { useState } from 'react';
import { products } from '../data/products'
import ProductCard from '../components/itemcard/productcard'; // Import the ProductCard component

const Section3 = () => {
  const [productList, setProductList] = useState(products);

  // Handle the removal of a product card when the eye icon is clicked
  const handleRemoveProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  return (
    <div className="section3">
      <h2>Featured Products</h2>
      <div className="product-list">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRemove={handleRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
