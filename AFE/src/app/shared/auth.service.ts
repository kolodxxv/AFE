import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn() {
    if (localStorage.getItem('username') === 'dev' || localStorage.getItem('username') === 'tester') {
      return !!localStorage.getItem('token')
    }
   else {
    return false;
   }
  }
}
