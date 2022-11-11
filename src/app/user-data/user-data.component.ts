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

  constructor() {
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

  }

  public deleteUser(): void {
    console.log('Delete user ' + this.user.id);
    this.deleteEvent.emit(this.user);
  }

}
