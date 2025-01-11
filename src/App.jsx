import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

import './App.css'

function App() {

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutm" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
