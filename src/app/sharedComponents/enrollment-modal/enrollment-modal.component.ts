import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enrollment-modal',
  templateUrl: './enrollment-modal.component.html',
  styleUrls: ['./enrollment-modal.component.scss']
})
export class EnrollmentModalComponent {
  public value: any;
  selected = 'option1';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
