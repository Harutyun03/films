import React from 'react'
import './Headers.css'
import logo from '../../assets/logo.svg'
import { useDispatch,useSelector } from 'react-redux'
import { changeLanguage } from '../../store/slices/globalSlice'
import { useEffect } from 'react'
import { getGeneres } from '../../store/slices/generalSlice'
import { CiSearch } from "react-icons/ci";
import { NavLink,useNavigate } from 'react-router-dom'
import { changeText } from '../../store/slices/filmsSlice'
import { getSearch } from '../../store/slices/filmsSlice'

const Headers = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {language} = useSelector((state) => state.globalData)
    const { text } = useSelector(state => state.filmsData)
    console.log(text);
    

    const handleSearch = (text) => {
      dispatch(getSearch(text))
      navigate('/serachFilm')
  }
  
    
        useEffect(() => {
           dispatch(getGeneres({language:language}))
        },[language])

  return (
    <header className='header'>
        <div className='container flex-container'>
            <NavLink to='/'>
               <img src={logo} className='logo'/>
            </NavLink>
            <div className='a'>
               <CiSearch />
               <input placeholder='search' className='inp' value={text} onChange={(e) => dispatch(changeText(e.target.value))}/>
               <button className='b-serch'  onClick={() => handleSearch(text)}>search</button>
               <select onChange={(e) => dispatch(changeLanguage(e.target.value))} className='sel'>
                <option value='en-US'>en-US</option>
                <option value='ru-US'>ru-RU</option>
               </select>
            </div>
        </div>
    </header>
  )
}

export default Headers