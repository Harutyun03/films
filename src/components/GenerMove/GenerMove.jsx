import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getGenresMoviesThunk } from '../../store/slices/generalSlice'
import './GenerMove.css'


const GenerMove = () => {

    const {id} = useParams()
    const { generFilm} = useSelector((state) => state. generesData)
    const {language} = useSelector((state) => state.globalData)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const imgUrl = 'https://image.tmdb.org/t/p/w500/'


    useEffect(() => {
        dispatch(getGenresMoviesThunk({
            language,
            genreId: id,
            page: page
        }))
    }, [id, language,page, dispatch])

  return (
    <div className='parent'>
        {
            generFilm.map((gener) => {
                return <NavLink to={`/info/${gener.id}`} className='gener-info' key={gener.id}>
                            <img src={imgUrl + gener.poster_path} alt='' className='img-gener'/>
                            <h2>{gener.title}</h2>
                        </NavLink>
            })
        }
        </div>
  )
}

export default GenerMove