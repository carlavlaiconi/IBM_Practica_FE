import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/userModel';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent {
  public value: any;

  public teamId: number = 1
  public studentLoaded: boolean = false
  public students: User[] = []

  columns: string[] = ['id', 'name'];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;

  constructor(private userService: UsersService, private changeDetectorRefs: ChangeDetectorRef) { }

  async ngOnInit() {
    this.studentLoaded = false
    await this.initStudents();
  }

  async initStudents() {
    try {
      let allUsers = await this.userService.getAllUsers().toPromise() || [];
      //this.students = allUsers.filter(user => user.teamId === 1);
  this.students = allUsers;
      // Initialize the dataSource after the data has loaded
      const dataSource = new MatTableDataSource<any>(this.students);
      this.tableComponent.dataSource = dataSource;
  
      this.studentLoaded = true;
      this.changeDetectorRefs.detectChanges();
    } catch (error) {
      console.error(error);
    }
  }
  

}
