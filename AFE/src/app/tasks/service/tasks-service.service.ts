import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public getUserTasks(): Observable<any> {
    return of ([
      {user: 'dev', name: 'Restructurization', info: 'Table requires restructurization and reorganisation.'},
      {user: 'dev', name: 'Dark-mode', info: 'Implement dark-mode.'},
      {user: 'dev', name: 'User Info', info: 'Make it case sensitive.'},
      {user: 'dev', name: 'Ticket-assignment', info: 'Tickets for each user.'},
      {user: 'tester', name: 'Review Functionality', info: 'Check app functionality for any bugs.'},
      {user: 'tester', name: 'Login component vulnerabilities', info: 'Login form test.'}
      
    ])
  }

}
