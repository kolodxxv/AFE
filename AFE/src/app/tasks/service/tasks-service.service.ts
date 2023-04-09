import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public getUserTasks(): Observable<Partial<IUserTasks>[]> {
    return of ([
      {user: IUserType.DEV, name: 'Restructurization', info: 'Table requires restructurization and reorganisation.'},
      {user: IUserType.DEV, name: 'Dark-mode', info: 'Implement dark-mode.', whatever: 'test'},
      {user: IUserType.DEV, name: 'User Info', info: 'Make it case sensitive.'},
      {user: IUserType.DEV, name: 'Ticket-assignment', info: 'Tickets for each user.'},
      {user: IUserType.TESTER, name: 'Review Functionality', info: 'Check app functionality for any bugs.'},
      {user: IUserType.TESTER, name: 'Login component vulnerabilities', info: 'Login form test.'}
    ])
  }

}

export interface IUserTasks {
  user: string;
  name: string;
  info: string;
  selectedValue: string;
}

export enum IUserType {
  DEV = 'dev',
  TESTER = 'tester'

}
