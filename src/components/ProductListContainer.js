import React, {
  useEffect,
  useState,
} from 'react';
import ProductList from './ProductList';

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
    console.log(data);
  }, []);
  return <ProductList data={data} />;
};

export default ProductListContainer;
