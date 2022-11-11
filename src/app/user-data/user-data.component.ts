import { DialogUserEditComponent } from './../dialog-user-edit/dialog-user-edit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faPencil, IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-user-data]',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input("user") public user: UserInterface;

  private faPencil: IconDefinition;
  private faTrash: IconDefinition;

  @Output("onDeleteUser") private deleteEvent: EventEmitter<UserInterface>;

  constructor(private dialog: MatDialog) {
    this.faPencil = faPencil;
    this.faTrash = faTrash;

    this.deleteEvent = new EventEmitter<UserInterface>();
  }

  ngOnInit(): void {
  }

  public getInfoIcon(): IconDefinition {
    return this.faPencil;
  }

  public getTrashIcon(): IconDefinition {
    return this.faTrash;
  }

  public updateUser() : void{
    this.openDialog();
  }

  public deleteUser(): void {
    console.log('Delete user ' + this.user.id);
    this.deleteEvent.emit(this.user);
  }

  private openDialog(): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(DialogUserEditComponent, {
      width: '500px', 
      data: {
        id: this.user['id'],
        firstName: this.user['first-name'],
        lastName: this.user['last-name'],
        dateOfBirth: this.user['date-of-birth'],
        taxCode: this.user['tax-code'],
        email: this.user['email']
      }
    });
    this.afterDialogClose(dialogRef);
  }

  private afterDialogClose(dialogRef: MatDialogRef<any>): void {
    dialogRef.afterClosed().subscribe(
      (result) => {
        console.log("Il Dialog è stato chiuso");
      }
    );
  } 

}
