import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map, pipe } from "rxjs";

import { UsersModel } from "./models/users-model";



@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        private http: HttpClient
    ) {}

    getData() {
        return this.http.get(
            'http://127.0.0.1:8080/api/read.php');
    }

    addUser(user: any) {
        return this.http.post(
            'http://127.0.0.1:8080/api/create.php', user
        );
    }

    delUser(id: number) {
        
        return this.http.delete(
            `http://127.0.0.1:8080/api/delete.php?id=${id}`
        );
    }

}