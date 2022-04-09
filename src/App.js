import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ExperiencePage from './pages/ExperiencePage';
import PortfolioPage from './pages/PortfolioPage';
import ContainerPage from './pages/ContainerPage';




function App() {

  return (
    <>
      <ContainerPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
