import { INavigation } from '../ng5-basic/definitions';

export const TeamNavigation: Array<INavigation> = [
  {
    title: 'nav_team',
    id: 'nav_team',
    children: [
      {
        title: 'user_teams',
        id: 'user_teams',
        link: '/teams',
        activeMatches: ['/teams'],
        permissions: ['READ_TEAM'],
      },
      {
        id: 'packages',
        title: 'packages',
        link: '/packages',
        permissions: ['READ_SERVICE_PACKAGE'],
        type: 'INTER_TEAM',
        activeMatches: ['/packages/([0-9])'],
      },
      {
        title: 'payments',
        id: 'payments',
        type: 'INTER_TEAM',
        link: '/payments',
        permissions: ['READ_PAYMENTS'],
      },
      {
        id: 'roles',
        title: 'roles',
        type: 'INTER_TEAM',
        link: '/roles',
        activeMatches: ['/role/([0-9])'],
        permissions: ['READ_ROLES'],
      },
      {
        id: 'new_role',
        title: 'create_role',
        type: 'INTER_TEAM',
        link: '/new-role',
        permissions: ['WRITE_ROLES'],
      },
    ],
  },
];

export const UserNavigation: Array<INavigation> = [
  {
    title: 'nav_user',
    id: 'nav_user',
    children: [
      {
        title: 'my_profile',
        id: 'my_profile',
        link: '/profile',
        activeMatches: ['/profile'],
      },
      {
        title: 'new_team',
        id: 'new_team',
        link: '/new-team',
        activeMatches: ['/new-team'],
        permissions: ['WRITE_TEAM'],
      },
    ],
  },
];
