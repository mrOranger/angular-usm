import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import DatabaseService from '../services/database/database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
class UsersComponent implements OnInit {

  private databaseService: DatabaseService;
  private users: Array<Object>;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.users = new Array<Object>();
  }

  public ngOnInit(): void {
    this.databaseService.getUsers().
      pipe(map((user) => {
        this.users.push(user);
      })).
      subscribe(() => this.users = this.users.flat());
  }

  public getUsers(): Array<Object> {
    return this.users;
  }
}

export { UsersComponent };