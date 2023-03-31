import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // TODO: Reactive Forms 

  public checkUserCredentials(username: string, password: string) : boolean {
    return username != '' && password != '';
  }

  public storeUserName(username: string) {
    localStorage.setItem('username', username);
  }
}
