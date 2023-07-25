import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatusStudentComponent } from './my-status-student.component';

describe('MyStatusStudentComponent', () => {
  let component: MyStatusStudentComponent;
  let fixture: ComponentFixture<MyStatusStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyStatusStudentComponent]
    });
    fixture = TestBed.createComponent(MyStatusStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
