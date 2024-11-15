// src/components/sections/CouplesSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { coupleData } from '../../utils/chartData';
import { useInView } from '../../hooks/useInView';

// Animation styles
const styles = {
  fadeIn: {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out'
  },
  fadeInVisible: {
    opacity: 1,
    transform: 'translateY(0)'
  }
};

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
        ...styles.fadeIn,
        ...(hasAnimated ? styles.fadeInVisible : {}),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const CouplesSection = () => {
  const [lineChartData, setLineChartData] = useState([]);
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();
  const [ref3, isInView3] = useInView();
  const [ref4, isInView4] = useInView();

  // Animate line chart data
  useEffect(() => {
    if (isInView1) {
      const timer = setTimeout(() => {
        setLineChartData(coupleData.couplesByAge);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView1]);

  return (
    <div className="space-y-24">
      {/* Couples par âge et sexe */}
      <div ref={ref1}>
  <AnimatedSection>
    <h3 className="text-xl font-semibold mb-6">
      Proportion des personnes en couple selon l'âge et le sexe
    </h3>
  </AnimatedSection>
  
  <div className="h-[400px] w-full">
    <ResponsiveContainer>
      <BarChart 
        data={isInView1 ? coupleData.couplesByAge : []}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="age" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="femmes" 
          name="Femmes" 
          fill="#FF6B35"
          animationDuration={1500}
          animationBegin={0}
        />
        <Bar 
          dataKey="hommes" 
          name="Hommes" 
          fill="#4169E1"
          animationDuration={1500}
          animationBegin={300}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
  
  <AnimatedSection delay={800}> {/* Increased delay to account for both bars animation */}
    <div className="mt-8 text-gray-700 space-y-4">
      <p>À Genève, 68% des individus âgés de 18 à 80 ans sont en couple. Les femmes âgées de 35 à 44 ans sont celles qui sont le plus souvent en couple (81%). Ce taux descend à 51% pour les femmes de 65 à 80 ans.</p>
      <p>Il y a une inversion du rapport entre hommes et femmes en couple aux deux extrémités des groupes d'âge. Parmi les 25-34 ans, une proportion significativement plus élevée de femmes que d'hommes sont en couple (75% des femmes contre 58% des hommes). À l'inverse, chez les 65-80 ans, ce sont les hommes qui sont plus fréquemment en couple (76% des hommes contre 51% des femmes).</p>
    </div>
  </AnimatedSection>
</div>

      {/* Différence d'âge */}
      <div ref={ref2}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Différence d'âge au sein des couples
          </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView2 ? coupleData.ageGap : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="category" type="category" width={150} />
              <Tooltip />
              <Bar 
                dataKey="value" 
                fill="#4169E1"
                animationDuration={1500}
                animationBegin={0}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={800}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Dans 54% des couples hétérosexuels, l'homme est plus âgé que la femme, tandis que 31% des couples ont des partenaires d'âge similaire (avec un écart d'un an ou moins), et seuls 15% des couples ont une femme plus âgée.</p>
            <p>Ces écarts d'âges entre les partenaires s'expriment différemment selon le niveau d'éducation de la personne interrogée. Ainsi, 61% des individus dont le degré d'éducation le plus élevé est le secondaire I sont dans un couple où l'homme est plus âgé que la femme. Cette proportion est significativement plus élevée que chez ceux ayant atteint le secondaire II ou l'éducation tertiaire, où ces taux sont respectivement de 53% et 51%.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Type de relation */}
      <div ref={ref3}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Type de relation selon l'âge
          </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView3 ? coupleData.relationshipType : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="ageGroup" type="category" />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="marie" 
                name="Marié" 
                fill="#4169E1" 
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="nonMarie" 
                name="Non marié" 
                fill="#FF6B35" 
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={800}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Un peu moins de trois quarts (72%) des personnes âgées de 25 à 80 ans en couple sont mariées. Si l'union libre est le type de relation privilégié chez les jeunes couples (65% chez les 25-34 ans), le mariage est majoritaire dans les groupes plus âgés.</p>
            <p>Le type d'union est lié à la présence d'enfants dans le ménage. Parmi les ménages avec au moins un enfant (biologique ou adoptif), 82% des couples sont mariés, tandis que ce taux chute à 58% pour les ménages sans enfants.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Mode de rencontre */}
      <div ref={ref4}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6">
            Évolution des modes de rencontre
          </h3>
        </AnimatedSection>
        
        <div className="h-[500px] w-full">
          <ResponsiveContainer>
            <BarChart data={isInView4 ? coupleData.meetingMode : []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="mode" 
                angle={-45} 
                textAnchor="end" 
                height={100} 
                interval={0}
              />
              <YAxis domain={[0, 30]} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="Avant 2013" 
                fill="#32CD32"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="2013-2018" 
                fill="#4169E1"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="2019-2023" 
                fill="#FF6B35"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={800}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Les modes de rencontre des couples ont évolué au fil du temps. Ces changements sont notamment dus à l'essor des applications et des sites de rencontre, qui sont, à égalité avec les amis et les connaissances, les moyens de rencontre les plus fréquents des couples formés entre 2019 et 2023 (26% pour chacun de ces modes).</p>
            <p>L'apparition de ces nouveaux modes de rencontre a largement contribué à réduire la part d'autres modes, tels que les bars, discothèques, concerts et fêtes, qui représentent 17% pour les couples formés avant 2013 et ne représentent plus que 9% pour ceux formés dans les cinq années précédant 2023.</p>
            <p>Les nouveaux modes de rencontre concernent généralement plus les jeunes que les générations plus âgées. Parmi les 18-44 ans à Genève en 2023, 15% ont rencontré leur partenaire grâce à une application ou un site de rencontre. Ce taux est de 6% pour les 45-70 ans.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CouplesSection;