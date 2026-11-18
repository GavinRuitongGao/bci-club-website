import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SearchModal from './components/layout/SearchModal'
import Home from './pages/Home'
import BCIKnowledge from './pages/BCIKnowledge'
import ResearchFrontiers from './pages/ResearchFrontiers'
import OurResearch from './pages/OurResearch'
import ResearchGallery from './pages/ResearchGallery'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <ScrollToTop />
      <Navbar />
      <SearchModal />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<BCIKnowledge />} />
          <Route path="/frontiers" element={<ResearchFrontiers />} />
          <Route path="/research" element={<OurResearch />} />
          <Route path="/gallery" element={<ResearchGallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
