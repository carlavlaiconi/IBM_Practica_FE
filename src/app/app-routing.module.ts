import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMentorComponent } from './start-mentor/start-mentor.component';

const routes: Routes = [
  {
    path: '',
    component: StartMentorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
