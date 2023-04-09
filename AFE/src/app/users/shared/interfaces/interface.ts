import { Observable, of as observableOf, merge } from 'rxjs';


export interface UsersItem {
    name: string;
    id: number;
    surname: string;
    country: string;
    city: string;
  }