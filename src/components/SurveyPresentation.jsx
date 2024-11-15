// src/components/SurveyPresentation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle, ArrowUpCircle, Menu, X } from 'lucide-react';
import CouplesSection from './sections/CouplesSection';
import ChildrenSection from './sections/ChildrenSection';

const SurveyPresentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const slidesRef = useRef([]);

  const sections = [
    {
      title: "Enquête sur les familles et les générations 2023",
      subtitle: "Résultats pour le canton de Genève",
      content: "Cette enquête quinquennale fournit des résultats sur l'état actuel et l'évolution des familles ainsi que sur les relations entre les générations.",
      icon: "📊",
      component: null
    },
    {
      title: "Les couples",
      subtitle: "État des lieux des relations de couple à Genève",
      content: "À Genève, 68% des individus âgés de 18 à 80 ans sont en couple. Les dynamiques varient selon l'âge, le sexe et le niveau d'éducation.",
      icon: "👥",
      component: <CouplesSection />
    },
    {
      title: "Les enfants",
      subtitle: "Désirs d'enfants et effets de la parentalité",
      content: "Le nombre d'enfants souhaités et les effets de la parentalité varient selon différents facteurs sociodémographiques.",
      icon: "👶",
      component: <ChildrenSection />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      slidesRef.current.forEach((slide, index) => {
        if (slide) {
          const rect = slide.getBoundingClientRect();
          if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
            setActiveSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-orange-50">
      {/* Fixed Logo */}
      <div className="fixed top-8 left-8 z-50">
        <img 
          src="/images/logo.gif" 
          alt="Statistique Genève" 
          className="w-32 h-auto fixed-logo"
        />
      </div>

      {/* Fixed Copyright Notice */}
      <div className="fixed bottom-8 left-8 z-50 text-sm text-gray-600 copyright-text">
        © 2024 - OFS / OCSTAT
      </div>

      {/* Navigation Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-8 right-8 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <div 
        className={`fixed right-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 pt-20">
          <h3 className="text-lg font-semibold mb-6">Navigation</h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => {
                  slidesRef.current[index].scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeSlide === index 
                    ? 'bg-orange-50 text-orange-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <div className="text-sm text-gray-500">{section.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-2 z-30">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              slidesRef.current[index].scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index 
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-30">
        <button
          onClick={() => {
            const prevIndex = Math.max(0, activeSlide - 1);
            slidesRef.current[prevIndex].scrollIntoView({ behavior: 'smooth' });
          }}
          className={`p-2 transition-colors ${
            activeSlide === 0 
              ? 'text-gray-300' 
              : 'text-gray-600 hover:text-orange-600'
          }`}
          disabled={activeSlide === 0}
        >
          <ArrowUpCircle size={32} />
        </button>
        <button
          onClick={() => {
            const nextIndex = Math.min(sections.length - 1, activeSlide + 1);
            slidesRef.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
          }}
          className={`p-2 transition-colors ${
            activeSlide === sections.length - 1 
              ? 'text-gray-300' 
              : 'text-gray-600 hover:text-orange-600'
          }`}
          disabled={activeSlide === sections.length - 1}
        >
          <ArrowDownCircle size={32} />
        </button>
      </div>

      {/* Slides */}
      {sections.map((section, index) => (
        <div
          key={index}
          ref={el => slidesRef.current[index] = el}
          className="min-h-screen flex items-center justify-center p-8"
        >
          <div 
            className={`max-w-5xl w-full bg-white rounded-2xl shadow-xl p-12 transform transition-all duration-1000
            ${activeSlide === index 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-50 translate-y-8'
            }`}
          >
            <div className="flex flex-col items-center space-y-8">
              <div className="text-6xl">{section.icon}</div>
              
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{section.title}</h1>
                <h2 className="text-xl text-gray-600">{section.subtitle}</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
                {section.content}
              </p>

              {section.component && (
                <div className="w-full mt-8">
                  {section.component}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveyPresentation;