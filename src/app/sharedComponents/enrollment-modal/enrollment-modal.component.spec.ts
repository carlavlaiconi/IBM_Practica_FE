import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentModalComponent } from './enrollment-modal.component';

describe('EnrollmentModalComponent', () => {
  let component: EnrollmentModalComponent;
  let fixture: ComponentFixture<EnrollmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentModalComponent]
    });
    fixture = TestBed.createComponent(EnrollmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
