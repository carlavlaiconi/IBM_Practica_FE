import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from 'src/app/search.service';
import { MatPaginator } from '@angular/material/paginator';

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
  filteredStudents: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService) {}

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'Team 1', Grade: '9' },
        { Id: 2, Name: 'Team 2', Grade: '7' },
        { Id: 3, Name: 'Team 3', Grade: '10' },
        { Id: 4, Name: 'Team 4', Grade: '8' },
        { Id: 5, Name: 'Team 5', Grade: '6' },
        { Id: 6, Name: 'Team 6', Grade: '10' },
        { Id: 7, Name: 'Team 7', Grade: '9' },
        { Id: 8, Name: 'Team 8', Grade: '9' },
        { Id: 9, Name: 'Team 9', Grade: '7' },
        { Id: 10, Name: 'Team 10', Grade: '10' },
        { Id: 11, Name: 'Team 11', Grade: '8' },
        { Id: 12, Name: 'Team 12', Grade: '6' },
        { Id: 13, Name: 'Team 13', Grade: '10' },
        { Id: 14, Name: 'Team 14', Grade: '9' }
        // Add more student objects as needed...
      ];

      this.filteredStudents = this.students.slice();

      // Create a new MatTableDataSource instance with the students data
      const dataSource = new MatTableDataSource<any>(this.filteredStudents);
      
      // Assign the MatTableDataSource instance to the TableComponent's dataSource property
      this.tableComponent.dataSource = dataSource;
      this.tableComponent.dataSource.paginator =  this.paginator;
    }, 0); // Simulating a delay of 0 seconds for data retrieval

    this.searchService.currentSearchInput$.subscribe((filterValue) => {
      this.applyFilter(filterValue);
    });
  }
  applyFilter(filterValue: string) {
    const lowerCaseFilter = filterValue.trim().toLowerCase();

    this.filteredStudents = this.students.filter((dataItem: any) => {
      return (  
      dataItem.Name.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.Grade.toString().includes(lowerCaseFilter)
      );
    });

    // Update the table with the filtered data
    this.tableComponent.dataSource.data = this.filteredStudents;
  }
}  