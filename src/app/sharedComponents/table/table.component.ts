import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Directive({ selector: 'app-table-header' })
export class TableHeaderDirective {
  columns: string[] = [];
}

@Directive({ selector: 'app-table-row' })
export class TableRowDirective { }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  inputValue: string = '';

  constructor(private dialog: MatDialog) {}
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator || null;
    this.dataSource.data.forEach(row => {
      row.inputValueMark = null;
    });
  }

  openCommentModal(rowData: any) {
    this.dialog.open(CommentModalComponent, {
      data: { comment: rowData.Comment },
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDeleteRow(rowData: any) {
    // Implement the row deletion logic here
    // For example, if you are using MatTableDataSource, you can remove the row like this:
    const index = this.dataSource.data.indexOf(rowData);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }
  openAddCommentModal(rowData: any) {
    this.dialog.open(AddCommentComponent, {
      data: { comment: rowData.Comment },
    });
  }
  openEditModal(rowData: any) {
    this.dialog.open(EditModalComponent, {
      data: { comment: rowData.Comment },
    });
  }
}
