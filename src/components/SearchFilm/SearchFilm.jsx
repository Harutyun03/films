import React from 'react'
import { useSelector } from 'react-redux'
import './SearchFilm.css'

const SearchFilm = () => {
    const {search} = useSelector((state) => state.filmsData)
    console.log(search);
     const imgUrl = 'https://image.tmdb.org/t/p/w500/'
    
  return (
    <div className='serch-div'>
        {
          search.map((search) => {
            return <div className='serch-item'>
                <img src={imgUrl + search.poster_path} className='imag'/>
                <h1>{search.title}</h1>
            </div>
          })
        }
        </div>
  )
}

export default SearchFilm