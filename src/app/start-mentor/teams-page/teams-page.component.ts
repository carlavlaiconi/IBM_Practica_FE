import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent {
  public value:any;
  selected = 'option2';
  selected2 = 'option1'
  columns: string[] = ['Id', 'Name', 'Grade'];

  // Sample data (replace this with your actual data)
  students: any[] = [
    { Id: 1, Name: 'Team 1', Grade: '9' },
    { Id: 2, Name: 'Team 2', Grade: '7' },
    { Id: 3, Name: 'Team 3', Grade: '10' },
    { Id: 4, Name: 'Team 4', Grade: '8' },
    { Id: 5, Name: 'Team 5', Grade: '6' },
    { Id: 6, Name: 'Team 6', Grade: '11' },
    { Id: 7, Name: 'Team 7', Grade: '9' },
  
    // Add more student objects as needed...
  ];

}
