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
  selector: 'app-enrollments-page',
  templateUrl: './enrollments-page.component.html',
  styleUrls: ['./enrollments-page.component.scss']
})
export class EnrollmentsPageComponent {
  public value:any;


  columns: string[] = [' ', 'Activity', 'Edit'];
  enrollments: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;

  // Simulate an API call or data fetch to get students data (replace this with your actual data retrieval method)
  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.enrollments = [
        { ' ':1, Activity: 'Internship', Edit: 'delete'},
        { ' ':2, Activity: 'Summer Practice', Edit: 'delete'},
        { ' ':3, Activity: 'Project', Edit: 'delete' },
      ];

      const dataSource = new MatTableDataSource<any>(this.enrollments);
      
      this.tableComponent.dataSource = dataSource;
    }, 0);
  }
}