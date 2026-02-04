
import React, { useState, useEffect, useRef } from 'react';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <div className="reveal"><Hero /></div>
            <div className="reveal"><FulfillingLife onNavigate={() => setCurrentPage('contact')} /></div>
            <div className="reveal"><Specialties /></div>
            <div className="reveal"><EmpathySection onNavigate={() => setCurrentPage('contact')} /></div>
            <div className="reveal"><AboutSection onNavigate={() => setCurrentPage('contact')} /></div>
            <div className="reveal"><FAQs /></div>
            <div className="reveal"><ProfessionalBackground /></div>
            <div className="reveal"><FinalCTA onNavigate={() => setCurrentPage('contact')} /></div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
