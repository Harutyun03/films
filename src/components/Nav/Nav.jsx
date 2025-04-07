import React from 'react'
import GenersBtn from '../Headers/UI/GenersBtn/GenersBtn'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getGeneres } from '../../store/slices/generalSlice'
import './Nav.css'

const Nav = () => {
    const dispatch = useDispatch()
    const {generes} = useSelector((state) => state.generesData)


    useEffect(() => {
       dispatch(getGeneres())
    },[])

  return (
    <nav className='nav'>
        <div className='container flex-nav'>
        {
            generes.map((g) => {
                return <GenersBtn gener={g} key={g.id}/>
            })
        }
        </div>
    </nav>
  )
}

export default Nav