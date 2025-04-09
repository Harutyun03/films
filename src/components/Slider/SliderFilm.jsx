import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SliderFilm = ({f}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    const {id} = useParams()
  return (
    <div>
        {
          <NavLink to={`/info/${f.id}`}>
            <img src={imgUrl + f.backdrop_path}/>

          </NavLink>
        }
    </div>
  )
}

export default SliderFilm