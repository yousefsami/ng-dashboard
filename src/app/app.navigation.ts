import {
  TeamNavigation,
  INavigation,
  UserNavigation,
  AccessTokenNavigation,
} from 'projects/core/src/public_api';

export const AppNavigation: INavigation[] = [
  {
    title: 'Guide',
    link: '/guide',
    type: 'INTER_TEAM',
  },
  {
    title: 'Authentications (Public)',
    children: [
      {
        title: 'Login',
        link: '/login',
        type: 'PUBLIC',
      },
      {
        title: 'Signup',
        link: '/signup',
        type: 'PUBLIC',
      },
      {
        title: 'Reset password',
        link: '/reset-password',
        type: 'PUBLIC',
      },
      {
        title: 'Forgot password',
        link: '/forgot-password',
        type: 'PUBLIC',
      },
    ],
  },
  ...TeamNavigation,
  ...UserNavigation,
  ...AccessTokenNavigation,
  {
    type: 'AngularRouter',
    title: 'Developer',
    permissions: ['DEVELOPER'],
    link: '/developer',
  },
];
