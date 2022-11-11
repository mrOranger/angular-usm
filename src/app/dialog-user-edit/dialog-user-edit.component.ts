import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user-edit',
  templateUrl: './dialog-user-edit.component.html',
  styleUrls: ['./dialog-user-edit.component.css']
})
export class DialogUserEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserInterface) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
