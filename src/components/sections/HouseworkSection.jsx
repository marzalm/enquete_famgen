import React from 'react';
import { 
 BarChart, 
 Bar, 
 XAxis, 
 YAxis, 
 CartesianGrid, 
 Tooltip, 
 Legend, 
 ResponsiveContainer,
 PieChart,
 Pie,
 Cell
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
 const [showPercentages, setShowPercentages] = useState(false);

 useEffect(() => {
  if (!isInView4 && !isInView5) {
    setShowPercentages(false);
  }
}, [isInView4, isInView5]);

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
             <Tooltip formatter={(value) => `${value}%`} />
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
           <p>Dans le canton de Genève en 2023, bien que dans 45% des ménages ce soit principalement la femme qui s'occupe des tâches domestiques, la majorité (58%) préfère un partage équitable des tâches. Cela marque un changement par rapport à 2013 et 2018, où la majorité des ménages reposait principalement sur la femme pour les tâches domestiques.</p>
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
             <Tooltip formatter={(value) => `${value}%`} />
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
           <p>Les proportions varient considérablement en fonction des tâches domestiques. Les femmes sont majoritairement responsables de la lessive (51%), de l'organisation des cadeaux et petites attentions (59%), ainsi que de la préparation des repas (42%). En revanche, certaines tâches sont principalement partagées, comme le nettoyage (49%) et les courses ménagères (51%). Les hommes ou une autre personne prennent en charge les travaux administratifs (39%) et les petits travaux de réparation (62%).</p>
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
             <Tooltip formatter={(value) => `${value}%`} />
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
           <p>La répartition des soins aux enfants varie selon les tâches. Dans la majorité des ménages ce sont principalement les mères qui restent à la maison lorsque les enfants sont malades (51%) et qui s'occupent de les habiller (44%). Pour les autres responsabilités, la majorité des ménages opte pour une prise en charge conjointe des deux parents, notamment pour aider les enfants avec leurs devoirs (44%), les emmener à la crèche ou à l'école (59%), les coucher (70%) et jouer avec eux (79%).</p>
         </div>
       </AnimatedSection>
     </div>

     {/* Satisfaction by household type */}
     <div ref={ref4}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6 text-center">
            Satisfaction selon la présence d'enfants
          </h3>
        </AnimatedSection>

        <div className="flex justify-center gap-8">
          {houseworkData.satisfactionByHousehold.map((data, index) => (
            <div key={index} className="text-center">
              <h4 className="font-medium mb-2">{data.type}</h4>
              <div className="h-[200px] w-[200px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Très satisfait", value: isInView4 ? data.tresSatisfait : 0 },
                        { name: "Autre", value: isInView4 ? (100 - data.tresSatisfait) : 100 }
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      animationBegin={0}
                      animationDuration={2000}
                      onAnimationEnd={() => setShowPercentages(true)}
                    >
                      <Cell fill="#32CD32" />
                      <Cell fill="#e5e7eb" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div 
                className={`mt-2 font-bold transition-opacity duration-500 ${
                  showPercentages ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {data.tresSatisfait}%
              </div>
            </div>
          ))}
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>À Genève, 51% des hommes et des femmes de 25 à 60 ans vivant en couple se disent globalement très satisfaits de la répartition des tâches domestiques. Cette satisfaction est plus prononcée chez les hommes, avec 69% se déclarant très satisfaits, contre 41% des femmes. Cette disparité de satisfaction entre les sexes varie en fonction de la présence d'enfants de moins de 25 ans.</p>
          </div>
        </AnimatedSection>
      </div>

      {/* Satisfaction by education level */}
      <div ref={ref5}>
        <AnimatedSection>
          <h3 className="text-xl font-semibold mb-6 text-center">
            Satisfaction selon le niveau de formation
          </h3>
        </AnimatedSection>

        <div className="flex justify-center gap-8">
          {houseworkData.satisfactionByEducation.map((data, index) => (
            <div key={index} className="text-center">
              <h4 className="font-medium mb-2">{data.level}</h4>
              <div className="h-[200px] w-[200px]">
                <ResponsiveContainer>
                  <PieChart>
                  <Pie
  data={[
    { 
      name: "Très satisfait", 
      value: isInView4 ? data.tresSatisfait : 0 // or isInView5 for the second section
    },
    { 
      name: "Autre", 
      value: isInView4 ? (100 - data.tresSatisfait) : 100  // or isInView5 for the second section
    }
  ]}
  dataKey="value"
  nameKey="name"
  cx="50%"
  cy="50%"
  innerRadius={60}
  outerRadius={80}
  startAngle={90}
  endAngle={-270}
  animationBegin={500} // Added delay before animation starts
  animationDuration={3000} // Increased duration
  onAnimationEnd={() => {
    setTimeout(() => {
      setShowPercentages(true);
    }, 500); // Added delay before showing percentage
  }}
>
  <Cell fill="#32CD32" />
  <Cell fill="#e5e7eb" />
</Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div 
                className={`mt-2 font-bold transition-opacity duration-500 ${
                  showPercentages ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {data.tresSatisfait}%
              </div>
            </div>
          ))}
        </div>
        
        <AnimatedSection delay={200}>
          <div className="mt-8 text-gray-700 space-y-4">
            <p>Les personnes ayant un diplôme de niveau tertiaire (HES, Université) sont significativement moins souvent très satisfaites que celles ayant un diplôme de niveau secondaire II (CFC, Maturité) ou de secondaire I (école obligatoire; 59% contre 61%). Ainsi, le groupe le moins très satisfait est celui des mères ayant achevé des études tertiaires, avec seulement 41% de satisfaction élevée.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HouseworkSection;