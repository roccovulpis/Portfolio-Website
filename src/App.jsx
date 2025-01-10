import Background from './components/Background'
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody'
import SkillGrid from './components/SkillGrid'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HomeBody />
      {/* <Background /> */}
      <SkillGrid />
      <ProjectsGrid />
      <Footer />
    </>
  )
}

export default App
