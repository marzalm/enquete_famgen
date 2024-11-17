import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle, ArrowUpCircle, Menu, X } from 'lucide-react';
import CouplesSection from './sections/CouplesSection';
import ChildrenSection from './sections/ChildrenSection';
import HouseworkSection from './sections/HouseworkSection';
import InfoSection from './sections/InfoSection';

const SurveyPresentation = () => {
 const [activeSlide, setActiveSlide] = useState(0);
 const [menuOpen, setMenuOpen] = useState(false);
 const slidesRef = useRef([]);

 const sections = [
   {
     title: "Enquête sur les familles et les générations 2023",
     subtitle: "Résultats pour le canton de Genève",
     content: (
        <>
          Cette enquête quinquennale fournit des résultats sur l'état actuel et l'évolution des familles ainsi que sur les relations entre les générations. <br />
             
          <a 
            href="https://www.bfs.admin.ch/bfs/fr/home/statistiques/population/enquetes/efg.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 underline"
          >
             Plus d'information ici.
          </a>
        </>
      ),
      icon: (
       <img 
         src="/animations/family.gif"
         alt="Family animation"
         className="w-[150px] h-[150px] object-contain"
       />
     ),
     component: null
   },
   {
     title: "Les couples",
     subtitle: "État des lieux des relations de couple à Genève",
     content: "À Genève, 68% des individus âgés de 18 à 80 ans sont en couple. Les dynamiques varient selon l'âge, le sexe et le niveau d'éducation.",
     icon: (
        <img 
          src="/animations/couple.gif"
          alt="Couple animation"
          className="w-[150px] h-[150px] object-contain"
        />
      ),
     component: <CouplesSection />
   },
   {
     title: "Les enfants",
     subtitle: "Désirs d'enfants et effets de la parentalité",
     content: "Le nombre d'enfants souhaités et les effets de la parentalité varient selon différents facteurs sociodémographiques.",
     icon: (
        <img 
          src="/animations/enfants.gif"
          alt="Enfants animation"
          className="w-[150px] h-[150px] object-contain"
        />
      ),
     component: <ChildrenSection />
   },
   {
    title: "Répartition des tâches",
    subtitle: "Tâches domestiques et soins aux enfants",
    content: "La répartition des tâches domestiques et des soins aux enfants évolue vers plus d'égalité, mais des disparités persistent selon les types de tâches et les caractéristiques des ménages.",
    icon: (
      <img 
        src="/animations/tache.gif"
        alt="Task animation"
        className="w-[150px] h-[150px] object-contain"
      />
    ),
    component: <HouseworkSection />
  },
  {
    title: "Plus d'informations",
    subtitle: "Méthodologie et ressources supplémentaires",
    content: "Découvrez plus de détails sur l'enquête et accédez à des analyses approfondies.",
    icon: (
      <img 
        src="/animations/question.gif"
        alt="Information animation"
        className="w-[150px] h-[150px] object-contain"
      />
    ),
    component: <InfoSection />
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
  <div className="relative min-h-screen" style={{
    backgroundImage: 'url("/images/background.svg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}>
     {/* Fixed Logo Top Left */}
     <div className="fixed top-8 left-8 z-50">
       <img 
         src="/images/logo.gif" 
         alt="Statistique Genève" 
         className="fixed-logo max-h-[100px] w-auto"
       />
     </div>

     {/* Fixed Bottom Elements */}
     <div className="fixed bottom-8 left-8 z-50">
       <img 
         src="/images/logo_gen.png" 
         alt="Canton de geneve" 
         className="fixed-logo max-h-[80px] w-auto"
       />
     </div>
     
     <div className="fixed bottom-8 right-8 z-50">
       <span className="copyright-text">© 2024 - OFS / OCSTAT</span>
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
      <div className="w-13 h-13 mr-3">
        <img 
          src={`/animations/${index === 0 ? 'family' : index === 1 ? 'couple' : index === 2 ? 'enfants' : 'tache'}.gif`}
          alt={section.title}
          className="w-full h-full object-contain"
        />
      </div>
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
           className={`w-5 h-5 rounded-full transition-all duration-300 ${
             activeSlide === index 
               ? 'bg-green-500 scale-125' 
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
             <div className="text-6xl">
               {typeof section.icon === 'string' ? section.icon : section.icon}
             </div>
             
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