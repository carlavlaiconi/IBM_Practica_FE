import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.scss'],
})
export class SessionsPageComponent {
  public value:any;
  selected = 'option2';
  selected2 = 'option1'


  columns: string[] = ['Id', 'Name', 'Grade'];

  // Sample data (replace this with your actual data)
  students: any[] = [
    { Id: 1, Name: 'John Doe', Grade: '9' },
    { Id: 2, Name: 'Jane Smith', Grade: '7' },
    { Id: 3, Name: 'Michael Johnson', Grade: '10' },
    { Id: 4, Name: 'Emily Adams', Grade: '8' },
    { Id: 5, Name: 'William Brown', Grade: '6' },
    { Id: 6, Name: 'Olivia Davis', Grade: '11' },
    { Id: 7, Name: 'James Wilson', Grade: '9' },
  
    // Add more student objects as needed...
  ];
}
