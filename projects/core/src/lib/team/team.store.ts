import { BehaviorSubject } from 'rxjs';
import { IProduct } from './team.definitions';

export const PackagesStore: BehaviorSubject<
  IProduct<any>[]
> = new BehaviorSubject([]);
