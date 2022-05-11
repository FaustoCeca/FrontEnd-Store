import React from 'react'
import { getIcons } from '../functions/getIcons'
import { IconCard } from './IconCard';

export const IconList = () => {

    const icons = getIcons();

  return (
    <div className='icons__grid animate__animated animate__pulse'>
        {
            icons.map(icon => (
                <IconCard 
                key={ icon.id }
                { ...icon }
                />
            ))
        }
    </div>
  )
}
