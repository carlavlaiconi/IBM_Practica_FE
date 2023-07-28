import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent {
  comment: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.comment = data.comment;
  }
}
