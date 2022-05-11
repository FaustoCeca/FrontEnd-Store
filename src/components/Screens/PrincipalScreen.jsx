import React from 'react'
import { ProductList } from '../ProductList'

export const PrincipalScreen = () => {

  return (
    <div>
        
        <main className='contenedor'>
          <h1>Nuestros productos</h1>

          <ProductList />

        </main>

    </div>
  )
}
