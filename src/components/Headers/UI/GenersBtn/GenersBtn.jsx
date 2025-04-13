import React from 'react'
import { useDispatch } from 'react-redux'
import './GenersBtn.css'
import { NavLink } from 'react-router-dom'

const GenersBtn = ({gener}) => {
  console.log(gener);
  
  const dispatch = useDispatch()

  return (
    <div>
      <NavLink to={`/generFilm/${gener.id}`}>
          <li className='btn'>{gener?.name}</li>
      </NavLink>
    </div>
  )
}

export default GenersBtn