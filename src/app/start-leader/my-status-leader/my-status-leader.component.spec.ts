import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatusLeaderComponent } from './my-status-leader.component';

describe('MyStatusLeaderComponent', () => {
  let component: MyStatusLeaderComponent;
  let fixture: ComponentFixture<MyStatusLeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStatusLeaderComponent]
    });
    fixture = TestBed.createComponent(MyStatusLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
