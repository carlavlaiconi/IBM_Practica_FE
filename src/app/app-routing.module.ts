import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMentorComponent } from './start-mentor/start-mentor.component';
import { SessionsPageComponent } from './start-mentor/sessions-page/sessions-page.component';
import { StudentsPageComponent } from './start-mentor/students-page/students-page.component';
import { TeamsPageComponent } from './start-mentor/teams-page/teams-page.component';
import { EnrollmentsPageComponent } from './start-leader/enrollments-page/enrollments-page.component';
import { MembersPageComponent } from './start-leader/members-page/members-page.component';
import { MyStatusLeaderComponent } from './start-leader/my-status-leader/my-status-leader.component';
import { RegisterPageComponent } from './start-leader/register-page/register-page.component';
import { StartStudentComponent } from './start-student/start-student.component';
import { MyStatusStudentComponent } from './start-student/my-status-student/my-status-student.component';
import { MyTeamComponent } from './start-student/my-team/my-team.component';
import { StartLeaderComponent } from './start-leader/start-leader.component';

const routes: Routes = [
  {
    path: '',
    component: StartMentorComponent,
  },
  {
    path: 'Mentor',
    component: StartMentorComponent
  },
      {
        path: 'Sessions',
        component: SessionsPageComponent
      },
      {
        path: 'Students',
        component: StudentsPageComponent
      },
      {
        path: 'Teams',
        component: TeamsPageComponent
      },
  {
    path: 'Leader',
    component: StartLeaderComponent
  },
      {
        path: 'Enrollments',
        component: EnrollmentsPageComponent
      },
      {
        path: 'Members',
        component: MembersPageComponent
      },
      {
        path: 'MyStatus',
        component: MyStatusStudentComponent
      },
      {
        path: 'Register',
        component: RegisterPageComponent
      },
  {
    path: 'Student',
    component: StartStudentComponent
  },
      {
        path: 'MyStatus',
        component: MyStatusStudentComponent
      },
      {
        path: 'MyTeam',
        component: MyTeamComponent
      }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
