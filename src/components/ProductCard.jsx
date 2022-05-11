import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({id, title, price}) => {

    const imagePath = `/img/${id}.jpg`

  return (
    <div className='product__product'>
        <Link to={`product/${id}`}>
            <img className='product__img' src={ imagePath } alt={ title } />
            <div className='product__info'>
                <p className='product__title'> { title } </p>
                <p className='product__price'> ${ price } </p>
            </div>
        </Link>
    </div>
  )
}
