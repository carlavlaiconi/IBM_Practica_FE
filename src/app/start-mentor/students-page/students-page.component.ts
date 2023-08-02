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
import { ActivitiesService } from 'src/app/services/activities.service';
import { Activity } from 'src/models/activityModel';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  public value: any;
  selected: any;
  selected2 = 'option1'

  activityLoaded: boolean = false
  activities: Activity[] = []
  studentLoaded: boolean = false
  columns: string[] = ['id', 'name', 'grade'];
  students: User[] = [];
  filteredStudents: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private activityService: ActivitiesService, private userService: UsersService, private gradeService: GradesService, private changeDetectorRefs: ChangeDetectorRef) { }

  async ngOnInit() {
    this.activityLoaded = false
    await this.initActivity();
    if (this.activities.length > 0) {
      this.selected = this.activities[0].id;
  }
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
  async initActivity() {
    try {
        this.activities = await this.activityService.getAllActivities().toPromise();
        this.activityLoaded = true;
    } catch (error) {
        console.error(error);
    }
}

  async initStudents() {
    try {
      const activityId = this.selected;
      let allUsers = await this.userService.getAllUsers().toPromise() || [];
    
      // Filter only students and leaders
      this.students = allUsers.filter(user => user.role === 'student' || user.role === 'leader');
  
      const gradeObservables = this.students
        .filter(student => student.id !== undefined)
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