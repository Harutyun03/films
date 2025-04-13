import Headers from './components/Headers/Headers'
import './App.css'
import Nav from './components/Nav/Nav'
import HomePage from './page/HomePage/HomePage'
import FilmPage from './page/FilmPage/FilmPage'
import SearchFilm from './components/SearchFilm/SearchFilm'
import { Route, Routes } from 'react-router-dom'
import GenerMove from './components/GenerMove/GenerMove'

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
          <Route path='generFilm/:id' element={<GenerMove/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
