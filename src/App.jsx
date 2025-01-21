import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import ProjectDescription from './pages/ProjectDescription';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectDescription />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
