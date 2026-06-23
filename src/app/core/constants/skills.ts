import { SkillGroup } from '../models';

export const skills: SkillGroup[] = [
  { 
    label: 'Languages',
    items: ['JavaScript', 'TypeScript']
  },
  { 
    label: 'Frontend Frameworks',
    items: ['Angular 9', 'Angular 14', 'Angular 19']
  },
  { 
    label: 'State & Reactive',
    items: ['RxJS', 'NGXS']
  },
  {
    label: 'UI & Styling',
    items: ['HTML5', 'CSS3', 'SCSS', 'Angular Material']
  },
  { 
    label: 'APIs & Real-Time', 
    items: ['REST APIs', 'WebSockets'] 
  },
  { 
    label: 'Testing', 
    items: ['Jasmine', 'Karma', 'Unit Testing'] 
  },
  { 
    label: 'Tooling', 
    items: ['Git', 'GitHub', 'Figma'] 
  },
  { 
    label: 'Additional', 
    items: ['Node.js', 'Firebase', 'MongoDB', 'OOP', 'KISS / DRY', 'Agile / Scrum'] 
  },
];
