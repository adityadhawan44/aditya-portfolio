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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageProgress />
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