import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Background from './components/Background'
import NavbarComponent from './components/Navbar'
import HomeBody from './components/HomeBody'
import SkillGrid from './components/SkillGrid'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
