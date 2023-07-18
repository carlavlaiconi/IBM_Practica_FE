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

@NgModule({
  declarations: [
    AppComponent,
    StartMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
