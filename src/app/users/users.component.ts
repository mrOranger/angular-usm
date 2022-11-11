import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import DatabaseService from '../services/database/database.service';
import User from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
class UsersComponent implements OnInit {

  private databaseService: DatabaseService;
  private users: Array<UserInterface>;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.users = new Array<UserInterface>();
  }

  public ngOnInit(): void {

    this.databaseService.getUsers().
      pipe(map((user) => {
        this.users.push(user);
      })).
      subscribe(() => this.users = this.users.flat());
  }

  public getUsers(): Array<UserInterface> {
    return this.users;
  }
}

export { UsersComponent };