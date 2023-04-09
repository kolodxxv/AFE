import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public checkUserCredentials(username: string, password: string) : boolean {
    return username != '' && password != '';
  }
}
