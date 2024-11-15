// src/components/sections/ChildrenSection.jsx
import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { childrenData } from '../../utils/chartData';
import { useInView } from '../../hooks/useInView';

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
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

const ChildrenSection = () => {
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();
  const [ref3, isInView3] = useInView();

  return (
    <div className="space-y-24">
      {/* Souhait d'enfants et nombre d'enfants */}
      <div ref={ref1}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Souhait d'enfants et nombre d'enfants
          </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView1 ? childrenData.actualAndDesired : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="group" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="0 enfant" 
                fill="#FF6B35"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="1 enfant" 
                fill="#4169E1"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="2 enfants" 
                fill="#32CD32"
                animationDuration={1500}
                animationBegin={600}
              />
              <Bar 
                dataKey="3 enfants ou plus" 
                fill="#FFD700"
                animationDuration={1500}
                animationBegin={900}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={1500}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>En 2023, le nombre d'enfants souhaités par les personnes âgées de 20 à 35 ans (sans enfants) est proportionnel au nombre d'enfants des individus âgés de 50 à 65 ans. La majorité des 20-35 ans souhaitent avoir deux enfants (47%), tandis que ceux ne désirant qu'un seul enfant constituent la plus faible proportion (12%).</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Évolution du nombre d'enfants souhaités */}
      <div ref={ref2}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Évolution du nombre d'enfants souhaités chez les 20-35 ans
          </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView2 ? childrenData.desiredEvolution : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="year" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="0 enfant" 
                fill="#FF6B35"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="1 enfant" 
                fill="#4169E1"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="2 enfants" 
                fill="#32CD32"
                animationDuration={1500}
                animationBegin={600}
              />
              <Bar 
                dataKey="3 enfants ou plus" 
                fill="#FFD700"
                animationDuration={1500}
                animationBegin={900}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={1500}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Le nombre d'enfants souhaités a évolué en Suisse entre 2013 et 2023. La transformation la plus marquante concerne la proportion de personnes ne souhaitant pas avoir d'enfants, qui est passée de 9% en 2013 à 22% en 2023.</p>
            <p>Cette tendance générale à la baisse du souhait d'enfants se reflète dans toutes les configurations, sauf pour ceux qui souhaitent un seul enfant, où une augmentation est observée entre 2013 et 2023.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Effet de la naissance */}
      <div ref={ref3}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Effet de la naissance d'un enfant sur la satisfaction de vie et les perspectives professionnelles
          </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView3 ? childrenData.birthEffect : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="aspect" type="category" width={200} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="ameliore" 
                name="Améliore"
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="stable" 
                name="Stable"
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="deteriore" 
                name="Détériore"
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={1500}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Dans le canton de Genève, la majorité des personnes âgées de 25 à 39 ans sans enfants estiment que devenir parents améliorerait leur satisfaction de vie (55%). Cependant, 43% de ces individus jugent que l'arrivée d'un enfant nuirait à leurs perspectives professionnelles.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ChildrenSection;