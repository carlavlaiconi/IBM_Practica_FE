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

@NgModule({
  declarations: [
    AppComponent,
    StartMentorComponent,
    TeamsPageComponent,
    StudentsPageComponent,
    SessionsPageComponent,
    TableComponent
    
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
