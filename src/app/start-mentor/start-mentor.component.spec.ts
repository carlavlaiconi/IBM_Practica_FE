import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMentorComponent } from './start-mentor.component';

describe('StartMentorComponent', () => {
  let component: StartMentorComponent;
  let fixture: ComponentFixture<StartMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartMentorComponent]
    });
    fixture = TestBed.createComponent(StartMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
