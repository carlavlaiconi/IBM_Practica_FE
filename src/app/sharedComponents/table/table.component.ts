
import { Component, ContentChild, ContentChildren, Directive, Input, QueryList } from '@angular/core';

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

export class TableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
}
