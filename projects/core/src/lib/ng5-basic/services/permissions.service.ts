import { Injectable } from '@angular/core';

@Injectable()
export class PermissionsService {

  constructor() { }

  UsersPermissions (): Array<any> {
    return [
      {
        group: 'USERS',
        key: 'USERS::CREATE',
        title: 'Create user'
      },
      {
        group: 'USERS',
        key: 'USERS::UPDATE',
        title: 'Update user'
      },
      {
        group: 'USERS',
        key: 'USERS::DELETE',
        title: 'Delete user'
      },
      {
        group: 'USERS',
        key: 'USERS::VIEW',
        title: 'View users'
      }
    ];
  }

  DevicesPermissions (): Array<any> {
    return [
      {
        title: 'Update device infomration',
        group: 'DEVICES',
        key: 'DEVICES::UPDATE_INFORMATION'
      },
      {
        title: 'Update devices',
        group: 'DEVICES',
        key: 'DEVICES::VIEW'
      }
    ];
  }

  LocationsPermissions (): Array<any> {
    return [
      {
        title: 'View Locations',
        group: 'LOCATIONS',
        key: 'LOCATIONS::VIEW'
      }
    ];
  }

  ActivitiesPermissions (): Array<any> {
    return [
      {
        title: 'View Activities',
        group: 'ACTIVITIES',
        key: 'ACTIVITIES::VIEW'
      }
    ];
  }

  RolesPermissions (): Array<any> {
    return [
      {
        title: 'View Roles',
        group: 'ROLES',
        key: 'ROLES::VIEW'
      }
    ];
  }


  WidgetsPermissions (): Array<any> {
    return [
      {
        group: 'WIDGETS',
        key: 'WIDGETS::CREATE',
        title: 'Create widget'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::UPDATE',
        title: 'Update widget info'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::CHANGE',
        title: 'Change widgets output'
      },
      {
        group: 'WIDGETS',
        key: 'WIDGETS::VIEW',
        title: 'View widgets'
      }
    ];
  }

  getAll (): Array<any>  {
    return this.DevicesPermissions()
      .concat(this.UsersPermissions())
      .concat(this.LocationsPermissions())
      .concat(this.RolesPermissions())
      .concat(this.ActivitiesPermissions())
      .concat(this.WidgetsPermissions());
  }

  findByKey (key: string) {
    return this.getAll().find(x => x.key === key);
  }

}
