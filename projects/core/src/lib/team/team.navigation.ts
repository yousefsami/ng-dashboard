import { INavigation } from '../ng5-basic/definitions';

export const TeamNavigation: Array<INavigation> = [
  {
    title: 'nav_team',
    id: 'nav_team',
    children: [
      {
        id: 'packages',
        title: 'packages',
        link: '/packages',
        type: 'INTER_TEAM',
        activeMatches: ['/packages/([0-9])'],
      },
      {
        title: 'payments',
        id: 'payments',
        type: 'INTER_TEAM',
        link: '/payments',
      },
      {
        id: 'roles',
        title: 'roles',
        type: 'INTER_TEAM',
        link: '/roles',
      },
      {
        id: 'new_role',
        title: 'create_role',
        type: 'INTER_TEAM',
        link: '/new-role',
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
        title: 'user_teams',
        id: 'user_teams',
        link: '/teams',
        activeMatches: ['/teams'],
      },
      {
        title: 'new_team',
        id: 'new_team',
        link: '/new-team',
        activeMatches: ['/new-team'],
      },
    ],
  },
];
