import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Grade } from "src/models/gradeModel";
import { TeamActivity } from "src/models/teamActivityModel";
import { Team } from "src/models/teamModel";

@Injectable({
    providedIn: 'root'
})

export class TeamsService {

    private apiUrl = 'http://localhost:8080/team';
    private apiUrl2 = 'http://localhost:8080/teamActivity'

    constructor(private http: HttpClient) {
    }

    getAverage(id: number, activityId: number): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/teamAverage/${id}/${activityId}`);
    }

    getByActivityId(activityId: number): Observable<TeamActivity[]> {
        return this.http.get<TeamActivity[]>(`${this.apiUrl2}/activity/${activityId}`);
    }

    getTeamById(id: number): Observable<Team> {
        return this.http.get<Team>(`${this.apiUrl}/${id}`);
    }

    getByTeamId(teamId: number): Observable<TeamActivity[]> {
        return this.http.get<TeamActivity[]>(`${this.apiUrl2}/team/${teamId}`);
    }
    
}