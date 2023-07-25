import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLeaderComponent } from './start-leader.component';

describe('StartLeaderComponent', () => {
  let component: StartLeaderComponent;
  let fixture: ComponentFixture<StartLeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartLeaderComponent]
    });
    fixture = TestBed.createComponent(StartLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
