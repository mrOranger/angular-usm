import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInterface } from '../models/interfaces/UserInterface';

@Component({
  selector: 'app-dialog-user-new',
  templateUrl: './dialog-user-new.component.html',
  styleUrls: ['./dialog-user-new.component.css']
})
export class DialogUserNewComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogUserNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserInterface, private formBuilder: FormBuilder) { 
    
    this.formGroup = formBuilder.group({
      firstName: [this.data.firstName, Validators.required],
      lastName: [this.data.lastName, Validators.required],
      dateOfBirth: [this.data.dateOfBirth, Validators.required],
      taxCode: [this.data.taxCode, Validators.required, Validators.minLength(6), Validators.maxLength(10)],
      email: [this.data.email, Validators.required, Validators.email]
    });
    
  }

  public ngOnInit(): void {
    
  }

  public closeDialog(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

}
