import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
            'http://127.0.0.1/api/read.php')
    }

}