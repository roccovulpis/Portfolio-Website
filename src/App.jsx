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
      <NavbarComponent />
      <HomeBody />
      <Background />
      <SkillGrid />
      <ProjectsGrid />
      <Footer />
    </>
  )
}

export default App
