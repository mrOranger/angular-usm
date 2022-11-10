import { environment } from './../../environments/environment';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
class DialogueComponent implements OnInit {

  public dialogBody: string;
  public dialogTitle: string;
  public dialogRef: MatDialogRef<DialogueComponent>;

  constructor(dialogRef: MatDialogRef<DialogueComponent>, @Inject(MAT_DIALOG_DATA) public dialogCode: any) { 
    this.dialogRef = dialogRef;
    switch (this.dialogCode.error) {
      case environment.errorMessages.notFound.code:
        this.dialogBody = environment.errorMessages.notFound.body;
        this.dialogTitle = environment.errorMessages.notFound.title;
        break;
      case environment.errorMessages.unauthorized.code:
        this.dialogBody = environment.errorMessages.unauthorized.body;
        this.dialogTitle = environment.errorMessages.unauthorized.title;
        break;
      default:
        this.dialogBody = environment.errorMessages.serverError.body;
        this.dialogBody = environment.errorMessages.serverError.title;
        break;
    }
  }

  ngOnInit(): void {
  }
}

export default DialogueComponent;