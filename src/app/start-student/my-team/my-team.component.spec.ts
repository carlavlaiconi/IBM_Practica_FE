import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamComponent } from './my-team.component';

describe('MyTeamComponent', () => {
  let component: MyTeamComponent;
  let fixture: ComponentFixture<MyTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTeamComponent]
    });
    fixture = TestBed.createComponent(MyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
