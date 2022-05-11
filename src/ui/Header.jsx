import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <header className='header__header'>
        <Link to='/'> 
        <img className='header__img' src="/img/logo.png" alt="Logo" />
        </Link>
        </header>
        
        <nav className='header__nav'>
            <Link className='header__navLink' to='/'>Tienda</Link>
            <Link className='header__navLink' to='/nosotros'>Nosotros</Link>
        </nav>
    </div>
  )
}
