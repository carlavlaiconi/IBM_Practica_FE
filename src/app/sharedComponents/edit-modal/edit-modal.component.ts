import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  public value: any;

  columns: string[] = ['Name', 'Present', 'Mark', 'Add comment', 'Average'];
  students: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    // Replace this with your actual data retrieval method, e.g., an API call, service, etc.
    // For now, we'll use a setTimeout to simulate a delay in data retrieval.   
    setTimeout(() => {
      // Sample data (replace this with your actual data)
      this.students = [
        { Name: 'Jovhn Doe', Present: true, Mark:'9', Average: '10'},
      ];

      const dataSource = new MatTableDataSource<any>(this.students);
      
      this.tableComponent.dataSource = dataSource;
    }, 0); 
  }

  openCommentModal(rowData: any) {
    this.dialog.open(AddCommentComponent, {
      data: { comment: rowData.Comment },
    });
  }
}
