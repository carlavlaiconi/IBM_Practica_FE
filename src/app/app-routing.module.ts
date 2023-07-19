import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMentorComponent } from './start-mentor/start-mentor.component';
import { SessionsPageComponent } from './start-mentor/sessions-page/sessions-page.component';
import { StudentsPageComponent } from './start-mentor/students-page/students-page.component';
import { TeamsPageComponent } from './start-mentor/teams-page/teams-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartMentorComponent
  },
  {
    path: 'Mentor',
    component: StartMentorComponent,
    children:[
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
