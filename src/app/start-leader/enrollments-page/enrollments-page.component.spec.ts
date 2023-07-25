import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsPageComponent } from './enrollments-page.component';

describe('EnrollmentsPageComponent', () => {
  let component: EnrollmentsPageComponent;
  let fixture: ComponentFixture<EnrollmentsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentsPageComponent]
    });
    fixture = TestBed.createComponent(EnrollmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
