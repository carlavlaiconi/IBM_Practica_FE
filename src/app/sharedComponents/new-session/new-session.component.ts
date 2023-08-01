import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableComponent } from '../table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SearchService } from 'src/app/search.service';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-session',
  templateUrl: './new-session.component.html',
  styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent {
  public value: any;

  columns: string[] = ['Id', 'Name', 'Present', 'Mark', 'Add comment'];
  students: any[] = [];
  filteredStudents: any[] = []

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'Jovhn Doe' },
        { Id: 2, Name: 'Jane Smith' },
        { Id: 3, Name: 'Michael Johnson' },
        { Id: 4, Name: 'Emily Adams' },
        { Id: 5, Name: 'William Brown' },
        { Id: 6, Name: 'Olivia Davis' },
        { Id: 7, Name: 'James Wilson' },
        { Id: 8, Name: 'John Doe' },
        { Id: 9, Name: 'Jane Smith' },
        { Id: 10, Name: 'Michael Johnson' },
        { Id: 11, Name: 'Emily Adams' },
        { Id: 12, Name: 'William Brown' },
        { Id: 13, Name: 'Olivia Davis' },
        { Id: 14, Name: 'James Wilson' }
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