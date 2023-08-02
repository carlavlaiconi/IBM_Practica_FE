import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class ActivitiesService {

private apiUrl = 'http://localhost:8080/activity';

    constructor(private http: HttpClient) {

    }

    getAllActivities (): Observable<any> {
        return this.http.get(this.apiUrl);
      }

    // postActivity (data: any): Observable<any>{
    //     return this.http.post(this.apiUrl, data);
    // }
}