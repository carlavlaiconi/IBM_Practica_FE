import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { User } from "src/models/userModel";

@Injectable({
    providedIn: 'root'
  })

export class UsersService {

private apiUrl = 'http://localhost:8080/users';

    constructor(private http: HttpClient) {

    }

      getAllUsers(): Observable<User[]> {
        // Your implementation...
        // If no users or on error, return an empty array.
        return this.http.get<User[]>(this.apiUrl).pipe(
          catchError(error => {
            console.error(error);
            return of([]);  // returns an Observable of an empty array
          })
        );
    }
    

    // postActivity (data: any): Observable<any>{
    //     return this.http.post(this.apiUrl, data);
    // }

}