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
        activeMatches: [
          '/teams',
          '/invite-new-user',
          '/team/[0-9]/[0-9]',
          '/invite/[0-9]',
        ],
      },
      {
        id: 'packages',
        title: 'packages',
        link: '/packages',
        permissions: ['TEAM:MANAGE_SERVICE_PACKAGES'],
        type: 'INTER_TEAM',
        activeMatches: ['/packages/([0-9])'],
      },
      {
        title: 'payments',
        id: 'payments',
        type: 'INTER_TEAM',
        link: '/payments',
        permissions: ['TEAM:MANAGE_PAYMENTS'],
      },
      {
        id: 'roles',
        title: 'roles',
        type: 'INTER_TEAM',
        link: '/roles',
        activeMatches: ['/role/([0-9])'],
        permissions: ['TEAM:*'],
      },
      {
        id: 'new_role',
        title: 'create_role',
        type: 'INTER_TEAM',
        link: '/new-role',
        permissions: ['TEAM:*'],
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
      },
    ],
  },
];

export const AccessTokenNavigation: Array<INavigation> = [
  {
    title: 'access_and_thirdparty',
    id: 'access_and_thirdparty',
    children: [
      {
        title: 'access_keys',
        id: 'access_keys',
        link: '/access-keys',
        activeMatches: ['/access-key/[0-9]', '/access-keys'],
        permissions: ['TEAM:ACCESS_KEY_READ'],
      },
      {
        title: 'new_access_key',
        id: 'new_access_key',
        link: '/new-access-key',
        activeMatches: ['/new-access-key'],
        permissions: ['TEAM:ACCESS_KEY_WRITE'],
      },
    ],
  },
];
