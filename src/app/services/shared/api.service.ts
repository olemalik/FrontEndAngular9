import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment'; 

@Injectable({ providedIn: 'root' })
export class APIService {
    constructor(private http: HttpClient) { }

    get(url:string,options?:any[]) {
        return this.http.get<any>(`${environment.apiUrl}/${url}`);
    }
}