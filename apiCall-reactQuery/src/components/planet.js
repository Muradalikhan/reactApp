
import React from 'react'

export const Planet = ({Planet}) => {
  return (
   <div className='card py-2'>
       <h3>{Planet.name}</h3>
        <p>population- {Planet.population}</p>
        <p>terrain- {Planet.terrain}</p>
   </div>
  )
}
