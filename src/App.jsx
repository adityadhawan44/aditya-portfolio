import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageProgress from './components/PageProgress';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TeachingPage from './pages/TeachingPage';
import ContactPage from './pages/ContactPage';
import './styles.css';

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const cards = Array.from(document.querySelectorAll('.reveal-card, .timeline-list, .timeline-list article, .project-showcase'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.18 },
    );

    cards.forEach((card) => observer.observe(card));

    let frame = 0;
    const handleMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--cursor-x', `${event.clientX}px`);
        root.style.setProperty('--cursor-y', `${event.clientY}px`);
        root.style.setProperty('--hero-tilt-x', `${(event.clientX / window.innerWidth - 0.5) * 10}deg`);
        root.style.setProperty('--hero-tilt-y', `${(event.clientY / window.innerHeight - 0.5) * -10}deg`);
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageProgress />
      <div className="cursor-aura" aria-hidden="true" />
      <div className="site-shell">
        <Header />
        <main className="page-stack page-enter">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
