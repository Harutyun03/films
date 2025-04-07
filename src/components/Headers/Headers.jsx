import React from 'react'
import './Headers.css'
import logo from '../../assets/logo.svg'
import { useDispatch,useSelector } from 'react-redux'
import { changeLanguage } from '../../store/slices/globalSlice'
import { useEffect } from 'react'
import { getGeneres } from '../../store/slices/generalSlice'
import { CiSearch } from "react-icons/ci";

const Headers = () => {
    const dispatch = useDispatch()
    const {language} = useSelector((state) => state.globalData)
    
    
        useEffect(() => {
           dispatch(getGeneres({language:language}))
        },[language])

  return (
    <header className='header'>
        <div className='container flex-container'>
            <div>
               <img src={logo} className='logo'/>
            </div>
            <div className='a'>
               <CiSearch />
               <input placeholder='search' className='inp'/>
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