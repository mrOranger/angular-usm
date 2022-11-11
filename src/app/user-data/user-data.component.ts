import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, Input, OnInit } from '@angular/core';
import { faInfo, IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-user-data]',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input("user") public user: UserInterface;
  private faInfo: IconDefinition;
  private faTrash: IconDefinition;

  constructor() {
    this.faInfo = faInfo;
    this.faTrash = faTrash;
  }

  ngOnInit(): void {
  }

  public getInfoIcon(): IconDefinition {
    return this.faInfo;
  }

  public getTrashIcon(): IconDefinition {
    return this.faTrash;
  }

}
