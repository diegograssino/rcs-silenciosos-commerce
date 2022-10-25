import React, {
  useEffect,
  useState,
} from 'react';
import ProductList from './ProductList';
import Landing from './Landing';

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
    console.log(data);
  }, []);
  return (
    <>
      <Landing />
      <ProductList data={data} />
    </>
  );
};

export default ProductListContainer;
