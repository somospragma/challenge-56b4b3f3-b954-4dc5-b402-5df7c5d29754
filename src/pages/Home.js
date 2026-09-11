import React from 'react';
import { getProducts } from '../services/api';
import Button from '../components/Button';

const Home = () => {
  const handleClick = async () => {
    const products = await getProducts();
    console.log(products);
  };

  return (
    <div>
      <h1>Bienvenido a nuestro eCommerce</h1>
      <Button onClick={handleClick}>Cargar productos</Button>
    </div>
  );
};

export default Home;