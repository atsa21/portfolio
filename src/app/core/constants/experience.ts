import { WorkExperience } from '../models';

export const workExperience: WorkExperience[] = [
  {
    company: 'Wht Agency',
    position: 'Front-End Developer',
    period: '06.2023 — Present',
    projects: [
      {
        name: 'Project #2: GoClinic',
        achievements: [
          'Built and maintained an injury healthcare platform from scratch using Angular, delivering core flows and business logic for multiple user roles.',
          'Developed the attorney account end-to-end, from registration and login to homepage and settings, enabling attorney users to invite patients to the platform.',
          'Implemented a real-time messenger with WebSockets, allowing admins, doctors, and patients to communicate directly inside the application',
          'Built a responsive patient account interface with tablet and mobile support, including video call functionality.',
          'Supported migration from Angular 14 to Angular 19, updating dependencies and ensuring stable performance across the application.',
          'Migrated component state handling from ChangeDetectorRef.detectChanges() to Angular signal(), improving reactivity and making UI updates more predictable',
          'Introduced modal loading states to block repeated user actions, reducing duplicate requests and improving application stability.',
          'Led a testing initiative and increased unit test coverage from 0% to 43%, helping reduce production bugs and improve release confidence'
        ],
        tech: [
          'Angular 14',
          'Angular 19',
          'TypeScript',
          'RxJS',
          'HTML',
          'CSS',
          'SCSS',
          'WebSockets',
          'Git',
          'Jasmine',
          'Karma'
        ],
      },
      {
        name: 'Project #1: ChartSync',
        achievements: [
          'Developed and maintained a medical records dashboard platform using Angular, supporting document workflows and user management.',
          'Implemented upload and download functionality for medical records, improving document handling for platform users',
          'Built pages for registered and invited users, supporting different account states and access scenarios.',
          'Integrated WebSocket-based updates on the users page, enabling dynamic refresh for unread messages.',
          'Introduced automated testing practices and increased unit test coverage from 0% to 20%.',
          'Collaborated with backend engineers to integrate REST APIs and support stable frontend-backend interaction.'
        ],
        tech: [
          'Angular 14',
          'TypeScript',
          'NGXS',
          'RxJS',
          'HTML',
          'CSS',
          'SCSS',
          'REST APIs',
          'WebSockets',
          'Git',
          'Jasmine',
          'Karma'
        ],
      },
    ],
  },
  {
    company: 'SoftServe',
    position: 'Front-End Developer',
    period: '01.2022 — 06.2023',
    projects: [
      {
        name: 'Eco Habits Platform',
        achievements: [
          'Developed and maintained a responsive Angular web app for managing garbage-removal orders and promoting eco-friendly habits.',
          'Implemented a habit tracker so users could monitor progress and stay engaged with environmentally friendly activities.',
          'Built a friends page and invitation flow so users could track habits together, increasing social interaction on the platform.',
          'Integrated Google Maps for address selection, improving usability of location-based order flows.',
          'Initiated code-refactoring efforts that improved maintainability and overall code clarity.',
          'Improved accessibility and achieved 75%+ unit-test coverage for new functionality using Jasmine.',
        ],
        tech: [
          'Angular 9',
          'TypeScript',
          'RxJS',
          'HTML',
          'CSS',
          'REST APIs',
          'Git',
          'Jasmine',
          'Karma',
        ],
      },
    ],
  },
];
