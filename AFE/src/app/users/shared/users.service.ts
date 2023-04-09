import { Injectable } from '@angular/core';
import { UsersItem } from './interfaces/interface';

@Injectable()
export class UsersService {



  constructor() { }

  public getListOfUsers(): UsersItem[] {
    return [
      {id: 1, name: 'John', surname: 'Doe', country: 'US', city: 'Texas'},
      {id: 2, name: 'Boris', surname: 'Upor', country: 'MD', city: 'Bachoi'},
      {id: 3, name: 'Anders', surname: 'Andersen', country: 'SE', city: 'Stockhold'},
      {id: 4, name: 'Meraba', surname: 'Abu', country: 'TR', city: 'Ankara'},
      {id: 5, name: 'Isak', surname: 'Davidovici', country: 'IL', city: 'Jerusalem'},
      {id: 6, name: 'Arkadii', surname: 'Strug', country: 'RU', city: 'Moscow'},
      {id: 7, name: 'Ego', surname: 'Ded', country: 'CN', city: 'Tibet'},
      {id: 8, name: 'Eter', surname: 'Nal', country: '?', city: '?'},
      {id: 9, name: 'Chuck', surname: 'Norik', country: 'MD', city: 'Chisinau'},
      {id: 10, name: 'Mandelwa', surname: 'Jason', country: 'UK', city: 'London'},
     
    ]
  }
}
