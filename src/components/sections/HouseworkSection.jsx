import React from 'react';
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
import { houseworkData } from '../../utils/chartData';
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

const HouseworkSection = () => {
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();
  const [ref3, isInView3] = useInView();
  const [ref4, isInView4] = useInView();
  const [ref5, isInView5] = useInView();

  return (
    <div className="space-y-24">
      {/* Evolution over years */}
      <div ref={ref1}>
      <AnimatedSection>
        <h3 className="text-xl font-semibold mb-6">
            Évolution de la répartition des tâches domestiques
        </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart data={isInView1 ? houseworkData.evolution : []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="femme" 
                name="Femme" 
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="partage" 
                name="Partage égal" 
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="homme" 
                name="Homme" 
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Dans le canton de Genève en 2023, bien que dans 41% des ménages ce soit principalement la femme qui s'occupe des tâches domestiques, la majorité (53%) préfère un partage équitable des tâches. Cela marque un changement par rapport à 2013 et 2018, où la majorité des ménages reposait principalement sur la femme pour les tâches domestiques.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Tasks distribution 2023 */}
      <div ref={ref2}>
        <AnimatedSection>
            <h3 className="text-xl font-semibold mb-6">
              Répartition des tâches domestiques en 2023
            </h3>
        </AnimatedSection>
        
        <div className="h-[500px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView2 ? houseworkData.tasks2023 : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="task" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="femme" 
                name="Femme" 
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="partage" 
                name="Partage égal" 
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="homme" 
                name="Homme" 
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Les proportions varient considérablement en fonction des tâches domestiques. Les femmes sont majoritairement responsables de la lessive (54%), de l'organisation des cadeaux et petites attentions (54%), ainsi que de la préparation des repas (46%). En revanche, certaines tâches sont principalement partagées, comme le nettoyage (44%) et les courses ménagères (56%). Les hommes ou une autre personne prennent en charge les travaux administratifs (43%) et les petits travaux de réparation (68%).</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Childcare distribution 2023 */}
      <div ref={ref3}>
        <AnimatedSection>
            <h3 className="text-xl font-semibold mb-6">
              Répartition des soins aux enfants en 2023
            </h3>
        </AnimatedSection>
        
        <div className="h-[500px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView3 ? houseworkData.childcare2023 : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="task" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="femme" 
                name="Femme" 
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="partage" 
                name="Partage égal" 
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="homme" 
                name="Homme" 
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>La répartition des soins aux enfants varie selon les tâches. Dans la majorité des ménages ce sont principalement les mères qui restent à la maison lorsque les enfants sont malades (56%) et qui s'occupent de les habiller (49%). Pour les autres responsabilités, la majorité des ménages opte pour une prise en charge conjointe des deux parents, notamment pour aider les enfants avec leurs devoirs (49%), les emmener à la crèche ou à l'école (56%), les coucher (65%) et jouer avec eux (73%).</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Satisfaction by household type */}
      <div ref={ref4}>
        <AnimatedSection>
            <h3 className="text-xl font-semibold mb-6">
              Satisfaction selon la présence d'enfants
            </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView4 ? houseworkData.satisfactionByHousehold : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="type" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="tresSatisfait" 
                name="Très satisfait" 
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="satisfait" 
                name="Satisfait" 
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="nonSatisfait" 
                name="Non satisfait" 
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>À Genève, 54% des hommes et des femmes de 25 à 60 ans vivant en couple se disent globalement très satisfaits de la répartition des tâches domestiques. Cette satisfaction est plus prononcée chez les hommes, avec 61% se déclarant très satisfaits, contre 46% des femmes. Cette disparité de satisfaction entre les sexes varie en fonction de la présence d'enfants de moins de 25 ans.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Satisfaction by education level */}
      <div ref={ref5}>
        <AnimatedSection>
            <h3 className="text-xl font-semibold mb-6">
              Satisfaction selon le niveau de formation
            </h3>
        </AnimatedSection>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={isInView5 ? houseworkData.satisfactionByEducation : []}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="level" type="category" width={120} />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="tresSatisfait" 
                name="Très satisfait" 
                fill="#32CD32"
                stackId="stack"
                animationDuration={1500}
                animationBegin={0}
              />
              <Bar 
                dataKey="satisfait" 
                name="Satisfait" 
                fill="#4169E1"
                stackId="stack"
                animationDuration={1500}
                animationBegin={300}
              />
              <Bar 
                dataKey="nonSatisfait" 
                name="Non satisfait" 
                fill="#FF6B35"
                stackId="stack"
                animationDuration={1500}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Les personnes ayant un diplôme de niveau tertiaire (HES, Université) sont significativement moins souvent très satisfaites que celles ayant un diplôme de niveau secondaire II (CFC, Maturité) ou de secondaire I (école obligatoire; 53% contre 65%). Ainsi, le groupe le moins très satisfait est celui des mères ayant achevé des études tertiaires, avec seulement 45% de satisfaction élevée.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HouseworkSection;