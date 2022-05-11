import React from 'react';
import 'animate.css';
import { getProducts } from '../functions/getProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {


  const products = getProducts();

  return (
    <div className='product__grid animate__animated animate__fadeInUp'>
      {
        products.map(product => (
          <ProductCard
            key={product.id}
            { ...product }
            />
        ))
      }
      <div className='product__graphic product__graphic--tshirts'></div>
      <div className='product__graphic product__graphic--node'></div>
    </div>
  )
}
