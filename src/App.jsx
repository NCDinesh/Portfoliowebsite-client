import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Achievements from './pages/Achievements';
import Media from './pages/Media';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary text-secondary">
        <Navbar />
        <main className="flex-grow p-4">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/media" element={<Media />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
