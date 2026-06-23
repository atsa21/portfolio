import { Project } from '../models';

export const petProjects: Project[] = [
  {
    title: 'Notatka',
    category: 'Side Project',
    year: '2023 — 2026',
    description: 'Notatka (means "note") started as a pet project to fix my own mess: todos in one app, a wishlist in another, reminders in a third. I wanted one clean place for all of it.',
    tags: ['Angular 20', 'Firebase', 'PWA'],
    url: 'https://github.com/atsa21/todo_list_app',
    image: '/work/notatka.png',
  },
  {
    title: 'Ubiudgeti',
    category: 'Side Project',
    year: '2026',
    description: 'Ubiudgeti is a personal finance tracker that helps you manage your budget, track expenses, and visualize your financial health. It was built to be simple, intuitive, and accessible on any device.',
    tags: ['Angular 20', 'Firebase'],
    url: 'https://github.com/atsa21',
    image: '/work/budget.png',
  },
];
