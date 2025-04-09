import React, { useEffect } from 'react'
import './FilmPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getfilmInfoThunk } from '../../store/slices/filmsSlice'

const FilmPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {language} = useSelector((state) => state.globalData)
    const {film} = useSelector((state) => state.filmsData)
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        dispatch(getfilmInfoThunk({id,language}))
    },[id])
  return (
    <div>
        <div className="films-info">
            <img src={imgUrl + film.poster_path} className='image'/>
            <h2>Films Name - {film.title}</h2>
               <div className="info">
                    <p>Origin Country - {film.origin_country}</p>
                    <p>Original Language - {film.original_language}</p>
                    <p>Popularity - {film.popularity}</p>
                    <h3>Release Date - {film.release_date}</h3>
               </div>
        </div>
    </div>
  )
}

export default FilmPage