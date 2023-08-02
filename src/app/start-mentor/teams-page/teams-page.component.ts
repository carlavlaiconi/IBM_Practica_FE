import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/sharedComponents/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { SearchService } from 'src/app/search.service';
import { MatPaginator } from '@angular/material/paginator';
import { Activity } from 'src/models/activityModel';
import { ActivitiesService } from 'src/app/services/activities.service';
import { GradesService } from 'src/app/services/grades.service';
import { TeamsService } from 'src/app/services/teams.service';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent {
  public value:any;
  selected: any;
  selected2 = 'option1'
  
  activityLoaded: boolean = false
  activities: Activity[] = []

  teamLoaded: boolean = false
  columns: string[] = ['id', 'name', 'grade'];
  teams: any[] = [];
  filteredTeams: any[] = [];

  @ViewChild(TableComponent, { static: true }) tableComponent!: TableComponent;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private teamService: TeamsService, private searchService: SearchService, private activityService: ActivitiesService, private gradeService: GradesService, private changeDetectorRefs: ChangeDetectorRef) {}

  async ngOnInit() {

    this.activityLoaded = false
    await this.initActivity();
    if (this.activities.length > 0) {
      this.selected = this.activities[0].id;
  }
  this.teamLoaded = false
    await this.initTeams();
    
    this.filteredTeams = this.teams.slice();

    const dataSource = new MatTableDataSource<any>(this.filteredTeams);

    this.tableComponent.dataSource = dataSource;
    this.tableComponent.dataSource.paginator = this.paginator;

    this.searchService.currentSearchInput$.subscribe((filterValue) => {
      this.applyFilter(filterValue);
    });
    
  }
  applyFilter(filterValue: string) {
    const lowerCaseFilter = filterValue.trim().toLowerCase();

    this.filteredTeams = this.teams.filter((dataItem: any) => {
      return (  
      dataItem.name.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.grade.toString().includes(lowerCaseFilter)
      );
    });

    this.tableComponent.dataSource.data = this.filteredTeams;
  }

  async initActivity() {
    try {
        this.activities = await this.activityService.getAllActivities().toPromise();
        this.activityLoaded = true;
    } catch (error) {
        console.error(error);
    }
}
async initTeams() {
  try {
    const activityId = this.selected;
    this.teams = await this.teamService.getByActivityId(activityId).toPromise() || [];

    const teamObservables = this.teams
      .filter(team => team.id !== undefined) 
      .map(team => {
        return this.teamService.getTeamById(team.id!).pipe(
          map(team2 => {
            team.name = team2.name;
            return team;
          })
        )
      });
    this.teams = await forkJoin(teamObservables).toPromise() || [];

    const gradeObservables = this.teams
        .filter(team => team.id !== undefined) 
        .map(team => {
          return this.teamService.getAverage(team.id!, activityId).pipe(
            map(grade => {
              team.grade = grade;
              return team;
            })
          )
        });
      this.teams = await forkJoin(gradeObservables).toPromise() || [];
  
    this.teamLoaded = true;
    this.changeDetectorRefs.detectChanges();
  } catch (error) {
    console.error(error);
  }
}

}  