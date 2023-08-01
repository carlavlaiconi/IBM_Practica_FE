import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {
  textareaValue: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    // Set the default text when the component initializes
    //this.textareaValue = ''
  }
}
