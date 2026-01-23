import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import backgroundMovie from './assets/myMovie.mp4'

function App() {
  return (
    <div className="app">
      <div className="bg-video" aria-hidden="true">
        <video
          className="bg-video__media"
          src={backgroundMovie}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="bg-video__overlay" />
      </div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </div>
  )
}

export default App
