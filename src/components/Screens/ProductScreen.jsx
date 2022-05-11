import React, { useMemo } from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { getProductById } from '../../functions/getProductById';

export const ProductScreen = () => {

  const { productId } = useParams();

  const product = useMemo(() => {
    return getProductById(productId);
  }, [productId]);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1, { replace: true })
  }
  

  if(!product) {
    return <Navigate to={'/'}/>
  }

  const handleAdd = (e) => {
    e.preventDefault();

    alert(`${ title } agregado al carrito!`);
  }

  const { id, price, producer, title } = product;

  const imagePath = `/img/${id}.jpg`;

  const description = `Un hermoso producto como lo es esta ${ title }, a el excelente precio de $${ price }, los mejores materiales y productos los encuentras aqui en FrontEnd Store`;

  return (
    <div className='contenedor'>
      <h1 className='title'>{title}</h1>

      <div className='tshirt__tshirt'>

        <img className='tshirt__img' src= { imagePath } alt= { id } />

        <div className='tshirt__content'>
          <p> { description } </p>
          <br />
          <p> Productor: { producer } </p>
          <form className='tshirt__form' onSubmit={ handleAdd }>
            <select className='tshirt__form--section'>
              <option disabled selected>--Seleccionar Talle--</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>

            <input className='tshirt__form--section' type="number" placeholder='Cantidad' min={ 1 }/>

            <input className='tshirt__form--submit' type="submit" placeholder='Agregar al Carrito' />
          </form>
        </div>
      </div>
    </div>
  )
}
