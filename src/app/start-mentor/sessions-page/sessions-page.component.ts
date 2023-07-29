import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SearchService } from 'src/app/search.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from 'src/app/sharedComponents/comment-modal/comment-modal.component';

@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.scss'],
})
export class SessionsPageComponent {
  public value: any;
  selected = 'option2';
  selected2 = 'option1'


  columns: string[] = ['Id', 'Name', 'Attendance', 'Grade', 'Comment'];
  students: any[] = [];
  filteredStudents: any[] = []

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private dialog: MatDialog) {}

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'Jovvhn Doe', Attendance: 'check', Grade: '9', Comment: 'yes-comment'},
        { Id: 2, Name: 'Jane Smith', Attendance: 'check', Grade: '7', Comment: 'no-comment'},
        { Id: 3, Name: 'Michael Johnson', Attendance: 'check', Grade: '10', Comment: 'yes-comment' },
        { Id: 4, Name: 'Emily Adams', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Id: 5, Name: 'William Brown', Attendance: 'check', Grade: '6', Comment: 'no-comment' },
        { Id: 6, Name: 'Olivia Davis', Attendance: 'check', Grade: '5', Comment: 'yes-comment' },
        { Id: 7, Name: 'James Wilson', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Id: 8, Name: 'John Doe', Attendance: 'check', Grade: '9', Comment: 'no-comment' },
        { Id: 9, Name: 'Jane Smith', Attendance: 'check', Grade: '7', Comment: 'yes-comment' },
        { Id: 10, Name: 'Michael Johnson', Attendance: 'check', Grade: '10', Comment: 'no-comment' },
        { Id: 11, Name: 'Emily Adams', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Id: 12, Name: 'William Brown', Attendance: 'check', Grade: '6', Comment: 'no-comment' },
        { Id: 13, Name: 'Olivia Davis', Attendance: 'check', Grade: '10', Comment: 'yes-comment' },
        { Id: 14, Name: 'James Wilson', Attendance: 'check', Grade: '9', Comment: 'no-comment' }
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

  openCommentModal(rowData: any) {
    this.dialog.open(CommentModalComponent, {
      data: { comment: rowData.Comment },
    });
  }
}