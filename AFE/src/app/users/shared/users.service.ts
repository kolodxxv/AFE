import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { developEndpoint } from 'src/environments/environment.prod';


@Injectable()
export class UsersService {



  constructor(
    private http: HttpClient
  ) { }

  public getListOfUsers(): Observable<any> {
    return this.http.get(`${developEndpoint}/users`);
    
  }

  public createUser(data: any): any {
    this.http.post(`${developEndpoint}/create-users`, { data }).subscribe(val => {
      console.log(val)
    });
  }
}
