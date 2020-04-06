import { INavigation } from '../ng5-basic/definitions';

export const TeamNavigation: Array<INavigation> = [
  {
    title: 'nav_team',
    id: 'nav_team',
    $collapsed: true,
    children: [
      {
        id: 'packages',
        title: 'packages',
        link: '/packages',
        type: 'INTER_TEAM',
        activeMatches: ['/packages/([0-9])'],
      },
      {
        title: 'my_profile',
        id: 'my_profile',
        link: '/profile',
      },
      {
        title: 'payments',
        id: 'payments',
        type: 'INTER_TEAM',
        link: '/payments',
      },
      {
        title: 'user_teams',
        id: 'user_teams',
        link: '/teams',
      },
      {
        title: 'new_team',
        id: 'new_team',
        link: '/new-team',
      },
    ],
  },
];
