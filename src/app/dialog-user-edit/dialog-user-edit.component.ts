import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user-edit',
  templateUrl: './dialog-user-edit.component.html',
  styleUrls: ['./dialog-user-edit.component.css']
})
export class DialogUserEditComponent implements OnInit {

  private firstNameCopy: string;
  private lastNameCopy: string;

  constructor(public dialogRef: MatDialogRef<DialogUserEditComponent>,
                @Inject(MAT_DIALOG_DATA) public data: UserInterface) { 
    this.firstNameCopy = data.firstName.slice();
    this.lastNameCopy = data.lastName.slice();
    }

  ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getFirstNameCopy(): string {
    return this.firstNameCopy;
  }

  public getLastNameCopy(): string {
    return this.lastNameCopy;
  }
}
