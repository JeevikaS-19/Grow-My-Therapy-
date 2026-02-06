import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FulfillingLife from './components/FulfillingLife';
import Specialties from './components/Specialties';
import EmpathySection from './components/EmpathySection';
import AboutSection from './components/AboutSection';
import FAQs from './components/FAQs';
import ProfessionalBackground from './components/ProfessionalBackground';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BlogPostOne from './components/BlogPostOne';
import PlaceholderPage from './components/PlaceholderPage';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div><Hero /></div>
      <div><FulfillingLife onNavigate={() => navigate('/contact')} /></div>
      <div><Specialties /></div>
      <div><EmpathySection onNavigate={() => navigate('/contact')} /></div>
      <div><AboutSection onNavigate={() => navigate('/contact')} /></div>
      <div><FAQs /></div>
      <div><ProfessionalBackground /></div>
      <div><FinalCTA onNavigate={() => navigate('/contact')} /></div>
    </>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="fade-in pt-32">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/blog-post-one" element={<BlogPostOne />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PlaceholderPage />} />
          <Route path="/good-faith-estimate" element={<PlaceholderPage />} />
          <Route path="/terms-and-conditions" element={<PlaceholderPage />} />
          <Route path="/disclaimer" element={<PlaceholderPage />} />
          {/* Catch-all route for 404s */}
          <Route path="*" element={<PlaceholderPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
