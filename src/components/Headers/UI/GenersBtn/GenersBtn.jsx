import React from 'react'
import { useDispatch } from 'react-redux'
import './GenersBtn.css'
import { changeGaner } from '../../../../store/slices/generalSlice'

const GenersBtn = ({gener}) => {
  
  const dispatch = useDispatch()
  const handlegener = (name) => {
    dispatch(changeGaner())
  }
  return (
    <div>
      <ul>
         <li className='btn' onClick={(name) => handlegener(name)}>{gener?.name}</li>
      </ul>
    </div>
  )
}

export default GenersBtn