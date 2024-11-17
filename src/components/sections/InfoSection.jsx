import React from 'react';
import { useInView } from '../../hooks/useInView';
import { useState, useEffect } from 'react';

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        ...(hasAnimated ? {
          opacity: 1,
          transform: 'translateY(0)'
        } : {}),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="space-y-16">
      {/* Resources Section */}
      <div>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Ressources supplémentaires
          </h3>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
  <div className="prose prose-lg max-w-none">
    <p className="text-lg mb-4">
      Vous pouvez consulter la publication entière sur la page{' '}
      <a 
        href="https://statistique.ge.ch/domaines/apercu.asp?dom=01_05" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Familles et ménages
      </a>{' '}
      sur le site de l'{' '}
      <a 
        href="https://statistique.ge.ch/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        OCSTAT
      </a>.
    </p>
    <ul className="list-disc pl-6 space-y-2 text-lg">
      <li>De nombreux tableaux et graphiques commentés sur des questions telles que le désir d'enfants, l'aide à des personnes tierces, des analyses plus approfondies sur la conciliation travail-famille</li>
      <li>Des informations méthodologiques (questionnaire, intervalles de confiance, etc...)</li>
    </ul>
  </div>
</AnimatedSection>
      </div>

      {/* Methodology Section */}
      <div>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            À propos de l'enquête
          </h3>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-4">
              L'enquête sur les familles et les générations (EFG) est une enquête quinquennale par échantillonnage, introduite pour la première fois en 2013 par l'Office fédéral de la statistique (OFS). Elle fait partie du programme de relevés du recensement fédéral de la population.
            </p>
            <p className="text-lg mb-4">
              Elle a pour objectif de fournir des résultats sur l'état actuel et l'évolution des familles et plus largement sur les relations entre les générations.
            </p>
            <p className="text-lg mb-4">
              Pour l'enquête de 2023, les données ont été récoltées entre avril et juillet 2023. Les personnes ont donné leurs réponses en ligne (90% des données récoltées) ou via une interview téléphonique.
            </p>
            <p className="text-lg">
              Dans l'ensemble du pays, 18 000 personnes ont participé à l'enquête en 2023. L'échantillon de base étant insuffisant pour permettre une exploitation suffisante à l'échelon du canton, un élargissement de l'échantillon a été financé afin de disposer de résultats représentatifs. Ainsi, quelque 2 600 personnes ont été interrogées dans le canton de Genève.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default InfoSection;