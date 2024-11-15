// src/components/sections/CouplesSection.jsx
import React from 'react';
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

const CouplesSection = () => {
  return (
    <div className="space-y-24"> {/* Increased space between chart sections */}
      {/* Couples par âge et sexe */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Proportion des personnes en couple selon l'âge et le sexe</h3>
        <div className="h-[400px] w-full"> {/* Fixed height container for chart */}
          <ResponsiveContainer>
            <LineChart data={coupleData.couplesByAge}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="linear" 
                dataKey="femmes" 
                stroke="#FF6B35" 
                strokeWidth={2}
                name="Femmes" 
              />
              <Line 
                type="linear" 
                dataKey="hommes" 
                stroke="#4169E1" 
                strokeWidth={2}
                name="Hommes" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-gray-700 space-y-4"> {/* Increased margin-top */}
          <p>À Genève, 68% des individus âgés de 18 à 80 ans sont en couple. Les femmes âgées de 35 à 44 ans sont celles qui sont le plus souvent en couple (81%). Ce taux descend à 51% pour les femmes de 65 à 80 ans.</p>
          <p>Il y a une inversion du rapport entre hommes et femmes en couple aux deux extrémités des groupes d'âge. Parmi les 25-34 ans, une proportion significativement plus élevée de femmes que d'hommes sont en couple (75% des femmes contre 58% des hommes). À l'inverse, chez les 65-80 ans, ce sont les hommes qui sont plus fréquemment en couple (76% des hommes contre 51% des femmes).</p>
        </div>
      </div>

      {/* Différence d'âge */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Différence d'âge au sein des couples</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={coupleData.ageGap}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="category" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="value" fill="#4169E1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-gray-700 space-y-4">
          <p>Dans 54% des couples hétérosexuels, l'homme est plus âgé que la femme, tandis que 31% des couples ont des partenaires d'âge similaire (avec un écart d'un an ou moins), et seuls 15% des couples ont une femme plus âgée.</p>
          <p>Ces écarts d'âges entre les partenaires s'expriment différemment selon le niveau d'éducation de la personne interrogée. Ainsi, 61% des individus dont le degré d'éducation le plus élevé est le secondaire I sont dans un couple où l'homme est plus âgé que la femme. Cette proportion est significativement plus élevée que chez ceux ayant atteint le secondaire II ou l'éducation tertiaire, où ces taux sont respectivement de 53% et 51%.</p>
        </div>
      </div>

      {/* Type de relation */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Type de relation selon l'âge</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer>
            <BarChart 
              data={coupleData.relationshipType}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="ageGroup" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="marie" name="Marié" fill="#4169E1" stackId="stack" />
              <Bar dataKey="nonMarie" name="Non marié" fill="#FF6B35" stackId="stack" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-gray-700 space-y-4">
          <p>Un peu moins de trois quarts (72%) des personnes âgées de 25 à 80 ans en couple sont mariées. Si l'union libre est le type de relation privilégié chez les jeunes couples (65% chez les 25-34 ans), le mariage est majoritaire dans les groupes plus âgés.</p>
          <p>Le type d'union est lié à la présence d'enfants dans le ménage. Parmi les ménages avec au moins un enfant (biologique ou adoptif), 82% des couples sont mariés, tandis que ce taux chute à 58% pour les ménages sans enfants.</p>
        </div>
      </div>

      {/* Mode de rencontre */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Évolution des modes de rencontre</h3>
        <div className="h-[500px] w-full"> {/* Increased height for this chart */}
          <ResponsiveContainer>
            <BarChart data={coupleData.meetingMode}>
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
              <Bar dataKey="Avant 2013" fill="#32CD32" />
              <Bar dataKey="2013-2018" fill="#4169E1" />
              <Bar dataKey="2019-2023" fill="#FF6B35" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8 text-gray-700 space-y-4">
          <p>Les modes de rencontre des couples ont évolué au fil du temps. Ces changements sont notamment dus à l'essor des applications et des sites de rencontre, qui sont, à égalité avec les amis et les connaissances, les moyens de rencontre les plus fréquents des couples formés entre 2019 et 2023 (26% pour chacun de ces modes).</p>
          <p>L'apparition de ces nouveaux modes de rencontre a largement contribué à réduire la part d'autres modes, tels que les bars, discothèques, concerts et fêtes, qui représentent 17% pour les couples formés avant 2013 et ne représentent plus que 9% pour ceux formés dans les cinq années précédant 2023.</p>
          <p>Les nouveaux modes de rencontre concernent généralement plus les jeunes que les générations plus âgées. Parmi les 18-44 ans à Genève en 2023, 15% ont rencontré leur partenaire grâce à une application ou un site de rencontre. Ce taux est de 6% pour les 45-70 ans.</p>
        </div>
      </div>
    </div>
  );
};

export default CouplesSection;