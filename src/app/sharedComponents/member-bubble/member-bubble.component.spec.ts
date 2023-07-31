import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBubbleComponent } from './member-bubble.component';

describe('MemberBubbleComponent', () => {
  let component: MemberBubbleComponent;
  let fixture: ComponentFixture<MemberBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberBubbleComponent]
    });
    fixture = TestBed.createComponent(MemberBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
