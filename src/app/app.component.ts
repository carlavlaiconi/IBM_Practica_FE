import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IBM';
  opened=false;
  public isHovered: any;
  public isStudent: boolean = true ;
  public isMentor: boolean = true ;
  public isLeader: boolean = true ;

  constructor(
    public router: Router
  ) { }

  toTeams(){
    this.router.navigateByUrl('Teams')
  }

  toSessions(){
    this.router.navigateByUrl('Sessions')
  }

  toStudents(){
    this.router.navigateByUrl('Students')
  }

  toEnrollments(){
    this.router.navigateByUrl('Enrollments')
  }

  toRegister(){
    this.router.navigateByUrl('Register')
  }

  toMembers(){
    this.router.navigateByUrl('Members')
  }

  toMyStatusLeader(){
    this.router.navigateByUrl('MyStatusLeader')
  }

  toMyStatusStudent(){
    this.router.navigateByUrl('MyStatusStudent')
  }

  toMyTeam(){
    this.router.navigateByUrl('MyTeam')
  }

}
