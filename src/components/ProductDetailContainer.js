import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';

const ProductDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setData(json));
    console.log(data);
  }, []);
  return <ProductDetail data={data} />;
};

export default ProductDetailContainer;
