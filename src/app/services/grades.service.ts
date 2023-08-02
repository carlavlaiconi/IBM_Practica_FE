import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Grade } from "src/models/gradeModel";

@Injectable({
    providedIn: 'root'
})

export class GradesService {

    private apiUrl = 'http://localhost:8080/grade';

    constructor(private http: HttpClient) {

    }

    getAverage(studentId: number, activityId: number): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/average/${studentId}/${activityId}`);
    }


    getGradeByStudentIdAndActivityId(studentId: number, activityId: number): Observable<Grade[]> {
        return this.http.get<Grade[]>(`${this.apiUrl}/student/${studentId}${activityId}`);
    }

    createGrade(grade: Grade): Observable<Grade> {
        return this.http.post<Grade>(this.apiUrl, grade);
    }

    updateGradeByStudentIdSessionIdAndMentorId(studentId: number, sessionId: number, mentorId: number, newGrade: number, comment: string): Observable<Grade> {
        return this.http.put<Grade>(`${this.apiUrl}/${studentId}${sessionId}${mentorId}`, {
            studentId,
            sessionId,
            mentorId,
            newGrade,
            comment
        });
    }

}