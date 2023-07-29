import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent {
  public value: any;

  columns: string[] = ['Id', 'Name'];
  students: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;

  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'John Doe', Grade: '9' },
        { Id: 2, Name: 'Jane Smith', Grade: '7' },
        { Id: 3, Name: 'Michael Johnson', Grade: '10' },
        { Id: 4, Name: 'Emily Adams', Grade: '8' },
        { Id: 5, Name: 'William Brown', Grade: '6' },
      ];

      const dataSource = new MatTableDataSource<any>(this.students);
      this.tableComponent.dataSource = dataSource;
    }, 0);
  }
}
