import { Observable, of as observableOf, merge } from 'rxjs';


export interface UsersItem {
    name: string;
    id: number;
    surname: string;
    country: CountryEnum;
    city: string;
  }

  export enum CountryEnum {
    MD = 'Moldova',
    US = 'United States',
    SE = 'Sweden',
    TR = 'Turkey',
    IL = 'Israel',
    RU = 'Russia',
    CN = 'China',
    UK = 'United Kingdom',
    NOT_DEFINED = '?'
  }
  
  
  
  export const USERS_DATA: UsersItem[] = [
    {id: 1, name: 'John', surname: 'Doe', country: CountryEnum.US, city: 'Texas'},
    {id: 2, name: 'Boris', surname: 'Upor', country: CountryEnum.MD, city: 'Bachoi'},
    {id: 3, name: 'Anders', surname: 'Andersen', country: CountryEnum.SE, city: 'Stockhold'},
    {id: 4, name: 'Meraba', surname: 'Abu', country: CountryEnum.TR, city: 'Ankara'},
    {id: 5, name: 'Isak', surname: 'Davidovici', country: CountryEnum.IL, city: 'Jerusalem'},
    {id: 6, name: 'Arkadii', surname: 'Strug', country: CountryEnum.RU, city: 'Moscow'},
    {id: 7, name: 'Ego', surname: 'Ded', country: CountryEnum.CN, city: 'Tibet'},
    {id: 8, name: 'Eter', surname: 'Nal', country: CountryEnum.NOT_DEFINED, city: '?'},
    {id: 9, name: 'Chuck', surname: 'Norik', country: CountryEnum.MD, city: 'Chisinau'},
    {id: 10, name: 'Mandelwa', surname: 'Jason', country: CountryEnum.UK, city: 'London'},
   
  ];
