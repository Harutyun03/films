import React from 'react'
import './GenersBtn.css'

const GenersBtn = ({gener}) => {
  return (
    <div>
      <ul>
         <li className='btn'>{gener?.name}</li>
      </ul>
    </div>
  )
}

export default GenersBtn