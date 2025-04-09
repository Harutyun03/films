import Headers from './components/Headers/Headers'
import './App.css'
import Nav from './components/Nav/Nav'
import HomePage from './page/HomePage/HomePage'
import FilmPage from './page/FilmPage/FilmPage'
import SearchFilm from './components/SearchFilm/SearchFilm'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Headers/>
      <Nav/>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='info/:id' element={<FilmPage/>}/>
          <Route path='/serachFilm' element={<SearchFilm/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
