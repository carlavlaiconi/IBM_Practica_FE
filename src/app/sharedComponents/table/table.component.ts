import { Component } from '@angular/core';

export interface MyData {
  id: number;
  name: string;
  grade: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  dataSource: MyData[] = [
    { id: 1, name: 'John Doe', grade: 30 },
    { id: 2, name: 'Jane Smith', grade: 25 },
    { id: 3, name: 'Bob Johnson', grade: 35 },
    { id: 5, name: 'Bob Doe', grade: 35 },
    { id: 6, name: 'Jane Johnson', grade: 35 },
    { id: 7, name: 'John Johnson', grade: 35 },
    { id: 8, name: 'John Smith', grade: 35 },
  ];

  displayedColumns: string[] = ['id', 'name', 'grade'];
}
