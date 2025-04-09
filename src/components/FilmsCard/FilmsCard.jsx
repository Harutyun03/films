import React from 'react'
import './FilmsCard.css'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const FilmsCard = ({film}) => {
    const dispatch = useDispatch
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    const {pageCount} = useSelector((state) => state.filmsData)



  return (
    <div className='film-info'>
      <NavLink to={`/info/${film.id}`} >
        <img src={imgUrl + film.poster_path} className='images'/>
        <h2>{film.title}</h2>
     </NavLink>
        <p>{film.release_date}</p>
    </div>
  )
}

export default FilmsCard