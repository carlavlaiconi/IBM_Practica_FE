import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms'
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StartMentorComponent } from './start-mentor/start-mentor.component';
import { TeamsPageComponent } from './start-mentor/teams-page/teams-page.component';
import { StudentsPageComponent } from './start-mentor/students-page/students-page.component';
import { SessionsPageComponent } from './start-mentor/sessions-page/sessions-page.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './sharedComponents/table/table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SidenavComponent } from './sharedComponents/sidenav/sidenav.component';
import { StartLeaderComponent } from './start-leader/start-leader.component';
import { RegisterPageComponent } from './start-leader/register-page/register-page.component';
import { EnrollmentsPageComponent } from './start-leader/enrollments-page/enrollments-page.component';
import { MembersPageComponent } from './start-leader/members-page/members-page.component';
import { MyStatusLeaderComponent } from './start-leader/my-status-leader/my-status-leader.component';
import { StartStudentComponent } from './start-student/start-student.component';
import { MyStatusStudentComponent } from './start-student/my-status-student/my-status-student.component';
import { MyTeamComponent } from './start-student/my-team/my-team.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    StartMentorComponent,
    TeamsPageComponent,
    StudentsPageComponent,
    SessionsPageComponent,
    TableComponent,
    SidenavComponent,
    StartLeaderComponent,
    RegisterPageComponent,
    EnrollmentsPageComponent,
    MembersPageComponent,
    MyStatusLeaderComponent,
    StartStudentComponent,
    MyStatusStudentComponent,
    MyTeamComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatTableModule, 
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
