import Headers from './components/Headers/Headers'
import './App.css'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Headers/>
      <Nav/>
      <div className='app'>
        <Routes>
          <Route/>
        </Routes>
      </div>
    </>
  )
}

export default App
