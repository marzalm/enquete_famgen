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
    <div className="space-y-16">
      {/* Couples par âge et sexe */}
      <div className="chart-container">
        <h3 className="slide-subtitle mb-4">Proportion des personnes en couple selon l'âge et le sexe</h3>
        <ResponsiveContainer width="100%" height={400}>
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

      {/* Différence d'âge */}
      <div className="chart-container">
        <h3 className="slide-subtitle mb-4">Différence d'âge au sein des couples</h3>
        <ResponsiveContainer width="100%" height={400}>
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

      {/* Type de relation */}
      <div className="chart-container">
        <h3 className="slide-subtitle mb-4">Type de relation selon l'âge</h3>
        <ResponsiveContainer width="100%" height={400}>
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

      {/* Mode de rencontre */}
      <div className="chart-container">
        <h3 className="slide-subtitle mb-4">Évolution des modes de rencontre</h3>
        <ResponsiveContainer width="100%" height={500}>  {/* Increased height for better readability */}
          <BarChart data={coupleData.meetingMode}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="mode" 
              angle={-45} 
              textAnchor="end" 
              height={100} 
              interval={0}  // Show all labels
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
    </div>
  );
};

export default CouplesSection;