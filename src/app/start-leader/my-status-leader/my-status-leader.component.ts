import { Component, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SearchService } from 'src/app/search.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from 'src/app/sharedComponents/comment-modal/comment-modal.component';

@Component({
  selector: 'app-my-status-leader',
  templateUrl: './my-status-leader.component.html',
  styleUrls: ['./my-status-leader.component.scss']
})
export class MyStatusLeaderComponent {
  public value: any;
  selected = 'option2';

  columns: string[] = ['Session','Date', 'Attendance', 'Grade', 'Comment'];
  sessions: any[] = [];
  filteredSessions: any[] = []

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private dialog: MatDialog) {}

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.sessions = [
        { Session:'Session 1', Date: '05.05.2023', Attendance: 'check', Grade: '9', Comment: 'yes-comment'},
        { Session:'Session 2', Date: '12.05.2023', Attendance: 'check', Grade: '7', Comment: 'no-comment'},
        { Session:'Session 3', Date: '19.05.2023', Attendance: 'check', Grade: '10', Comment: 'yes-comment' },
        { Session:'Session 4', Date: '26.05.2023', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Session:'Session 5', Date: '02.06.2023', Attendance: 'check', Grade: '6', Comment: 'no-comment' },
        { Session:'Session 6', Date: '09.06.2023', Attendance: 'check', Grade: '5', Comment: 'yes-comment' },
        { Session:'Session 7', Date: '16.06.2023', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Session:'Session 8', Date: '23.06.2023', Attendance: 'check', Grade: '9', Comment: 'no-comment' },
        { Session:'Session 9', Date: '30.06.2023', Attendance: 'check', Grade: '7', Comment: 'yes-comment' },
        { Session:'Session 10', Date: '07.07.2023', Attendance: 'check', Grade: '10', Comment: 'no-comment' },
        { Session:'Session 11', Date: '14.07.2023', Attendance: 'x', Grade: '-', Comment: 'no-comment' },
        { Session:'Session 12', Date: '21.07.2023', Attendance: 'check', Grade: '6', Comment: 'no-comment' },
      ];

      this.filteredSessions = this.sessions.slice();

      // Create a new MatTableDataSource instance with the students data
      const dataSource = new MatTableDataSource<any>(this.filteredSessions);
      
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

    this.filteredSessions = this.sessions.filter((dataItem: any) => {
      const sessionValue = dataItem.Session.toString().toLowerCase();
      
      return (  
      sessionValue.includes(lowerCaseFilter) ||
      dataItem.Grade.toString().includes(lowerCaseFilter)
      );
    });

    // Update the table with the filtered data
    this.tableComponent.dataSource.data = this.filteredSessions;
  }

  openCommentModal(rowData: any) {
    this.dialog.open(CommentModalComponent, {
      data: { comment: rowData.Comment },
    });
  }
}
