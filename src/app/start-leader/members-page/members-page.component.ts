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
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent {
  
  public value:any;
  selected = 'option2';


  columns: string[] = ['Id', 'Name', 'Grade', 'Delete'];
  students: any[] = [];
  filteredStudents: any[] = []

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private dialog: MatDialog) {}

  onDeleteClick(student: any) {
    // For now, you can add any logic you want when the trash bin icon is clicked
    console.log('Delete clicked for student:', student.Name);
  }
  

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Id: 1, Name: 'John Doe', Grade: '9', Delete: 'delete_forever'},
        { Id: 2, Name: 'Jane Smith', Grade: '7', Delete: 'delete_forever'},
        { Id: 3, Name: 'Michael Johnson', Grade: '10', Delete: 'delete_forever' },
        { Id: 4, Name: 'Emily Adams', Grade: '10', Delete: 'delete_forever' },
        { Id: 5, Name: 'William Brown', Grade: '6', Delete: 'delete_forever' },
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