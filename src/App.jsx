import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Welcome from './components/welcome'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Welcome />} path='/'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
