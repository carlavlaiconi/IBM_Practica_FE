import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { SearchService } from 'src/app/search.service';
import { MatPaginator } from '@angular/material/paginator';
import { forkJoin, map } from 'rxjs';
import { User } from 'src/models/userModel';
import { UsersService } from 'src/app/services/users.service';
import { ChangeDetectorRef } from '@angular/core';
import { Grade } from 'src/models/gradeModel';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  public value: any;
  selected = 'option2';
  selected2 = 'option1'

  studentLoaded: boolean = false
  columns: string[] = ['id', 'name', 'grade'];
  students: User[] = [];
  filteredStudents: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private userService: UsersService, private gradeService: GradesService, private changeDetectorRefs: ChangeDetectorRef) { }

  async ngOnInit() {
    this.studentLoaded = false
    await this.initStudents();
    
    this.filteredStudents = this.students.slice();

    const dataSource = new MatTableDataSource<any>(this.filteredStudents);

    this.tableComponent.dataSource = dataSource;
    this.tableComponent.dataSource.paginator = this.paginator;

    this.searchService.currentSearchInput$.subscribe((filterValue) => {
      this.applyFilter(filterValue);
    });
  }

  applyFilter(filterValue: string) {
    const lowerCaseFilter = filterValue.trim().toLowerCase();

    this.filteredStudents = this.students.filter((dataItem: any) => {
      return (
        dataItem.name.toLowerCase().includes(lowerCaseFilter) ||
        dataItem.grade.toString().includes(lowerCaseFilter)
      );
    });

    this.tableComponent.dataSource.data = this.filteredStudents;
  }

  async initStudents() {
    try {
      const activityId = 1;
      let allUsers = await this.userService.getAllUsers().toPromise() || [];
    
      // Filter only students and leaders
      this.students = allUsers.filter(user => user.role === 'student' || user.role === 'leader');
  
      const gradeObservables = this.students
        .filter(student => student.id !== undefined)  // Add this filter
        .map(student => {
          return this.gradeService.getAverage(student.id!, activityId).pipe(
            map(grade => {
              student.grade = grade;
              return student;
            })
          )
        });
      this.students = await forkJoin(gradeObservables).toPromise() || [];
  
      this.studentLoaded = true;
      this.changeDetectorRefs.detectChanges();
    } catch (error) {
      console.error(error);
    }
  }
  
  
}