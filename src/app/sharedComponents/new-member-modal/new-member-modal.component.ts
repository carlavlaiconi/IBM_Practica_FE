import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-member-modal',
  templateUrl: './new-member-modal.component.html',
  styleUrls: ['./new-member-modal.component.scss']
})
export class NewMemberModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
