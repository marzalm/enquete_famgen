// src/utils/chartData.js

export const coupleData = {
  // Data for "Les couples par âge et sexe"
  couplesByAge: [
    { age: '25-34', femmes: 77, hommes: 56 },
    { age: '35-44', femmes: 83, hommes: 74 },
    { age: '45-54', femmes: 76, hommes: 85 },
    { age: '55-64', femmes: 73, hommes: 77 },
    { age: '65-80', femmes: 49, hommes: 78 }
  ],

  // Data for "Différence d'âge au sein des couples"
  ageGap: [
    { category: 'Homme plus âgé', value: 52 },
    { category: 'Même âge', value: 33 },
    { category: 'Femme plus âgée', value: 15 }
  ],

  // Data for "Type de relation"
  relationshipType: [
    { ageGroup: '25-34', marie: 33, nonMarie: 67 },
    { ageGroup: '35-44', marie: 66, nonMarie: 34 },
    { ageGroup: '45-54', marie: 84, nonMarie: 16 },
    { ageGroup: '55-64', marie: 87, nonMarie: 13 },
    { ageGroup: '65-80', marie: 91, nonMarie: 9 }
  ],

  // Data for "Mode de rencontre"
  meetingMode: [
    {
      mode: 'Applications/sites',
      'Avant 2013': 3,
      '2013-2018': 17,
      '2019-2023': 28
    },
    {
      mode: 'Amis/connaissances',
      'Avant 2013': 27,
      '2013-2018': 23,
      '2019-2023': 24
    },
    {
      mode: 'École/travail',
      'Avant 2013': 25,
      '2013-2018': 19,
      '2019-2023': 21
    },
    {
      mode: 'Bars/discothèques',
      'Avant 2013': 19,
      '2013-2018': 15,
      '2019-2023': 7
    },
    {
      mode: 'Hobby/sport',
      'Avant 2013': 14,
      '2013-2018': 13,
      '2019-2023': 6
    },
    {
      mode: 'Par la famille',
      'Avant 2013': 8,
      '2013-2018': 10,
      '2019-2023': 9
    },
    {
      mode: 'Autre',
      'Avant 2013': 4,
      '2013-2018': 3,
      '2019-2023': 5
    }
  ]
};

export const childrenData = {
  // Data for "Souhait d'enfants et nombre d'enfants"
  actualAndDesired: [
    { group: '20-35 ans sans enfants', '0 enfant': 24, '1 enfant': 14, '2 enfants': 45, '3 enfants ou plus': 17 },
    { group: '50-65 ans', '0 enfant': 22, '1 enfant': 15, '2 enfants': 43, '3 enfants ou plus': 20 }
  ],

  // Data for "Évolution du nombre d'enfants souhaités"
  desiredEvolution: [
    { year: '2013', '0 enfant': 7, '1 enfant': 9, '2 enfants': 52, '3 enfants ou plus': 32 },
    { year: '2018', '0 enfant': 13, '1 enfant': 11, '2 enfants': 49, '3 enfants ou plus': 27 },
    { year: '2023', '0 enfant': 24, '1 enfant': 14, '2 enfants': 45, '3 enfants ou plus': 17 }
  ],

  // Data for "Effet de la naissance d'un enfant"
  birthEffect: [
    { aspect: 'Satisfaction de vie', ameliore: 57, stable: 40, deteriore: 3 },
    { aspect: 'Perspectives professionnelles', ameliore: 14, stable: 43, deteriore: 43 }
  ]
};

export const houseworkData = {
  // Evolution over years
  evolution: [
    { year: '2013', femme: 67, partage: 25, homme: 8 },
    { year: '2018', femme: 61, partage: 32, homme: 7 },
    { year: '2023', femme: 43, partage: 51, homme: 6 }
  ],

  // Tasks distribution 2023
  tasks2023: [
    { task: 'Lessive', femme: 56, partage: 37, homme: 7 },
    { task: 'Cadeaux', femme: 52, partage: 42, homme: 6 },
    { task: 'Repas', femme: 48, partage: 40, homme: 12 },
    { task: 'Nettoyage', femme: 44, partage: 42, homme: 14 },
    { task: 'Courses', femme: 34, partage: 54, homme: 12 },
    { task: 'Administration', femme: 33, partage: 24, homme: 43 },
    { task: 'Réparations', femme: 14, partage: 18, homme: 68 }
  ],

  // Childcare distribution 2023
  childcare2023: [
    { task: 'Enfant malade', femme: 58, partage: 36, homme: 6 },
    { task: 'Habiller', femme: 51, partage: 43, homme: 6 },
    { task: 'Devoirs', femme: 43, partage: 47, homme: 10 },
    { task: 'Transport', femme: 36, partage: 54, homme: 10 },
    { task: 'Coucher', femme: 27, partage: 63, homme: 10 },
    { task: 'Jouer', femme: 19, partage: 71, homme: 10 }
  ],

  // Satisfaction by household type
  satisfactionByHousehold: [
    { type: 'Avec enfants', tresSatisfait: 44, satisfait: 44, nonSatisfait: 12 },
    { type: 'Sans enfants', tresSatisfait: 53, satisfait: 39, nonSatisfait: 8 }
  ],

  // Satisfaction by education level
  satisfactionByEducation: [
    { level: 'Tertiaire', tresSatisfait: 51, satisfait: 39, nonSatisfait: 10 },
    { level: 'Secondaire II', tresSatisfait: 63, satisfait: 31, nonSatisfait: 6 },
    { level: 'Secondaire I', tresSatisfait: 67, satisfait: 26, nonSatisfait: 7 }
  ]
};