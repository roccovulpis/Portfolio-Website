import Background from './components/Background'
import Navbar from './components/Navbar'
import './App.css'
import HomeBody from './components/HomeBody'
import Projects from './components/Projects'
import SkillGrid from './components/SkillGrid'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HomeBody />
      {/* <Background /> */}
      <SkillGrid />
      <Footer />
    </>
  )
}

export default App
