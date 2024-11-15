// src/utils/chartData.js
export const coupleData = {
  // Data for "Les couples par âge et sexe"
  couplesByAge: [
    { age: '25-34', femmes: 75, hommes: 58 },
    { age: '35-44', femmes: 81, hommes: 76 },
    { age: '45-54', femmes: 78, hommes: 83 },
    { age: '55-64', femmes: 71, hommes: 79 },
    { age: '65-80', femmes: 51, hommes: 76 }
  ],

  // Data for "Différence d'âge au sein des couples"
  ageGap: [
    { category: 'Homme plus âgé', value: 54 },
    { category: 'Même âge', value: 31 },
    { category: 'Femme plus âgée', value: 15 }
  ],

  // Data for "Type de relation"
  relationshipType: [
    { ageGroup: '25-34', marie: 35, nonMarie: 65 },
    { ageGroup: '35-44', marie: 68, nonMarie: 32 },
    { ageGroup: '45-54', marie: 82, nonMarie: 18 },
    { ageGroup: '55-64', marie: 85, nonMarie: 15 },
    { ageGroup: '65-80', marie: 89, nonMarie: 11 }
  ],

  // Data for "Mode de rencontre"
  meetingMode: [
    {
      mode: 'Applications/sites',
      'Avant 2013': 5,
      '2013-2018': 15,
      '2019-2023': 26
    },
    {
      mode: 'Amis/connaissances',
      'Avant 2013': 25,
      '2013-2018': 25,
      '2019-2023': 26
    },
    {
      mode: 'École/travail',
      'Avant 2013': 23,
      '2013-2018': 21,
      '2019-2023': 19
    },
    {
      mode: 'Bars/discothèques',
      'Avant 2013': 17,
      '2013-2018': 13,
      '2019-2023': 9
    },
    {
      mode: 'Hobby/sport',
      'Avant 2013': 12,
      '2013-2018': 11,
      '2019-2023': 8
    },
    {
      mode: 'Par la famille',
      'Avant 2013': 10,
      '2013-2018': 8,
      '2019-2023': 7
    },
    {
      mode: 'Autre',
      'Avant 2013': 8,
      '2013-2018': 7,
      '2019-2023': 5
    }
  ]
};

export const childrenData = {
  // "Souhait d'enfants et nombre d'enfants"
  actualAndDesired: [
    { group: '20-35 ans sans enfants', '0 enfant': 22, '1 enfant': 12, '2 enfants': 47, '3 enfants ou plus': 19 },
    { group: '50-65 ans', '0 enfant': 20, '1 enfant': 13, '2 enfants': 45, '3 enfants ou plus': 22 }
  ],

  // "Évolution du nombre d'enfants souhaités" 
  desiredEvolution: [
    { year: '2013', '0 enfant': 9, '1 enfant': 7, '2 enfants': 54, '3 enfants ou plus': 30 },
    { year: '2018', '0 enfant': 15, '1 enfant': 9, '2 enfants': 51, '3 enfants ou plus': 25 },
    { year: '2023', '0 enfant': 22, '1 enfant': 12, '2 enfants': 47, '3 enfants ou plus': 19 }
  ],

  // "Effet de la naissance d'un enfant"
  birthEffect: [
    { aspect: 'Satisfaction de vie', ameliore: 55, stable: 42, deteriore: 3 },
    { aspect: 'Perspectives professionnelles', ameliore: 12, stable: 45, deteriore: 43 }
  ]
};