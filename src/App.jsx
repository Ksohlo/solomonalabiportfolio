import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Project from './components/Projects'
import Technologies from './components/Technologies'
import About from './components/About'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Welcome />} path='/'/>
          <Route element={<Project /> } path='/project' />
          <Route element={<Technologies /> } path='/technologies' />
          <Route element={<About /> } path='/about' />
        </Routes>
      </Router>
    </>
  )
}

export default App
