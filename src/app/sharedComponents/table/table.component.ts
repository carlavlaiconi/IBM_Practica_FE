import { Component, Directive, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Directive({ selector: 'app-table-header' })
export class TableHeaderDirective {
  columns: string[] = [];
}

@Directive({ selector: 'app-table-row' })
export class TableRowDirective { }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
