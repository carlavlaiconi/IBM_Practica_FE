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

  constructor(
    public router: Router
  ) { }

  toTeams(){
    this.router.navigateByUrl('Mentor/Teams')
  }

  toSessions(){
    this.router.navigateByUrl('Mentor/Sessions')
  }

  toStudents(){
    this.router.navigateByUrl('Mentor/Students')
  }

}
