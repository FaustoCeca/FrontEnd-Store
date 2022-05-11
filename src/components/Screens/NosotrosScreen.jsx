import React from 'react'
import { Icons } from '../Icons';


export const NosotrosScreen = () => {
  return (
    <div>
        <div className='contenedor'>
        <h1 className='title'>Sobre nosotros</h1>
          <div className='nosotros__contenido'>
      
            <div className='nosotros__txt'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatem sapiente, 
              iure at ad sequi explicabo excepturi temporibus similique, animi officiis aliquid sunt. 
              Sint explicabo vitae nulla praesentium alias voluptate! excepturi temporibus similique, animi officiis aliquid sunt. 
              Sint explicabo vitae nulla praesentium alias voluptate!</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatem sapiente, 
              iure at ad sequi explicabo excepturi temporibus similique, animi officiis aliquid sunt. 
              Sint explicabo vitae nulla praesentium alias voluptate!</p>
            </div>

              <img className='nosotros__img' src="/img/nosotros.jpg" alt="img nosotros" />

          </div>
        </div>

        <Icons />
    </div>
  )
}
