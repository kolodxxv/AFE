export class UsersInfo {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public city: string,
        public country: string
        ) {}
}

export interface UsersModel {
    id: number,
    name: string,
    surname: string,
    city: string,
    country: string
}