import React from 'react'
import { useSelector } from 'react-redux'
import './SearchFilm.css'
import { NavLink } from 'react-router-dom'

const SearchFilm = () => {
    const {search} = useSelector((state) => state.filmsData)
    console.log(search);
     const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    
  return (
    <div className='serch-div'>
        {
          search.map((search) => {
            return <NavLink to={`/info/${search.id}`} className='serch-item'>
                        <img src={imgUrl + search.poster_path} className='imag'/>
                        <h1>{search.title}</h1>
            </NavLink>
          })
        }
        </div>
  )
}

export default SearchFilm