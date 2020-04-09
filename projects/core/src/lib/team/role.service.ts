import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRole } from '../ng5-basic/definitions';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  public RolesStore: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {}

  public SetRoles(roles: IRole[]) {
    this.RolesStore.next(roles);
  }

  public DeleteRole(role: IRole) {
    this.RolesStore.next(this.RolesStore.value.filter((t) => t.id !== role.id));
  }
}
