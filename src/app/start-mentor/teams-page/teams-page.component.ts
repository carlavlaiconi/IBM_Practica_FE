import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { MatTableDataSource } from '@angular/material/table';

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

  students: any[] = [];

  @ViewChild(TableComponent) tableComponent!: TableComponent;

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'Team 1 Doe', Grade: '9' },
        { Id: 2, Name: 'Jane Smith', Grade: '7' },
        { Id: 3, Name: 'Michael Johnson', Grade: '10' },
        { Id: 4, Name: 'Emily Adams', Grade: '8' },
        { Id: 5, Name: 'William Brown', Grade: '6' },
        { Id: 6, Name: 'Olivia Davis', Grade: '11' },
        { Id: 7, Name: 'James Wilson', Grade: '9' },
        // Add more student objects as needed...
      ];

      // Create a new MatTableDataSource instance with the students data
      const dataSource = new MatTableDataSource<any>(this.students);
      
      // Assign the MatTableDataSource instance to the TableComponent's dataSource property
      this.tableComponent.dataSource = dataSource;
    }, 0); // Simulating a delay of 0 seconds for data retrieval
  }

}
