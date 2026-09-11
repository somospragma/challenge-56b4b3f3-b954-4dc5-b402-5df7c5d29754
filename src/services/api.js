import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ecommerce.com',
});

export const getProducts = () => api.get('/products');