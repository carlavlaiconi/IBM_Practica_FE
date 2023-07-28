import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { SearchService } from 'src/app/search.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  public value: any;
  selected = 'option2';
  selected2 = 'option1'

  columns: string[] = ['Id', 'Name', 'Grade'];
  students: any[] = [];
  filteredStudents: any[] = [];

  @ViewChild(TableComponent) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService) {}

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
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
        { Id: 6, Name: 'Olivia Davis', Grade: '5' },
        { Id: 7, Name: 'James Wilson', Grade: '9' },
        { Id: 8, Name: 'John Doe', Grade: '9' },
        { Id: 9, Name: 'Jane Smith', Grade: '7' },
        { Id: 10, Name: 'Michael Johnson', Grade: '10' },
        { Id: 11, Name: 'Emily Adams', Grade: '8' },
        { Id: 12, Name: 'William Brown', Grade: '6' },
        { Id: 13, Name: 'Olivia Davis', Grade: '10' },
        { Id: 14, Name: 'James Wilson', Grade: '9' }
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
