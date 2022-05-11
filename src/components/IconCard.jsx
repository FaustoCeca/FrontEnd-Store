import React from 'react';


export const IconCard = ({id, title, description}) => {

    const imagePath = `/img/${id}.png`

  return (
    <div className='icon__icon'>
        <div>
            <img className='icon__img' src={ imagePath } alt={ title } />
            <div className='icon__info'>
                <h3 className='icon__title title'> { title } </h3>
                <p className='icon__desc'> { description } </p>
            </div>
        </div>
    </div>
  )
}