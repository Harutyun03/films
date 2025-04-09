import React from 'react'
import './HomePage.css'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getfilmsThunk } from '../../store/slices/filmsSlice'
import FilmsCard from '../../components/FilmsCard/FilmsCard'
import { changePage } from '../../store/slices/filmsSlice'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderFilm from '../../components/Slider/SliderFilm'

const HomePage = () => {

const dispatch = useDispatch()
const {language} = useSelector((state) => state.globalData)
const {films, pageCount} = useSelector((state) => state.filmsData)




  const handleScrol = () => {
        dispatch(changePage())
    }

  var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        };

useEffect(() => {
   dispatch(getfilmsThunk({language,pageCount}))
},[pageCount,language])

  return (
    <div className='home-page'>
        <div className="slick-slider">
            <Slider {...settings}>
                {
                    films.map((f) => {
                        return <SliderFilm key={f.id} f={f}/>
                    })
                }
            </Slider>
        </div>
        <div className='films-card'>
        {
             films.map((film) => {
                return <FilmsCard key={film.id} film={film}/>
             })
        }
       </div>
       <button onClick={handleScrol}>next</button>
    </div>
  )
}

export default HomePage