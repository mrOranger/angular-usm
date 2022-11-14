import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInterface } from '../models/interfaces/UserInterface';

@Component({
  selector: 'app-dialog-user-new',
  templateUrl: './dialog-user-new.component.html',
  styleUrls: ['./dialog-user-new.component.css']
})
export class DialogUserNewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogUserNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserInterface) { }

  public ngOnInit(): void {
    
  }

  public closeDialog(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

}
