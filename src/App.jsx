import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Publications from './components/Publications';
import Footer from './components/Footer';

// Import Bootstrap JS for carousel
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize Bootstrap carousel after component mounts
    const carousel = document.querySelector('#home');
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3500,
        ride: 'carousel'
      });
    }

    // Show/hide scroll-to-top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="offset-lg-4 col-lg-7 main-content">
        <Hero />
        <div className="ms-lg-2 mx-lg-0 mx-2">
          <About />
          <Education />
          <Work />
          <Skills />
          <Projects />
          <Certificates />
          <Awards />
          <Publications />
          <Footer />
        </div>
      </div>
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
