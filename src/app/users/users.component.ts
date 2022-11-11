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

  public onDeleteUser(user: UserInterface): void {
    const deleteUserConfirm = this.deleteConfirmMessage(user);
    if (deleteUserConfirm) {
      this.databaseService.deleteUser(user).subscribe(
        (response) => {
          try {
            const userIndex: number = this.users.indexOf(user);
            this.users.splice(userIndex, 1);
          } catch (error) {
            console.log(error);
            alert("Errore interno al server, contattare l'assistenza.");
          }
        }
      );
    }
  }

  private deleteConfirmMessage(user: UserInterface): boolean {
    return confirm("Vuoi eliminare l'utente ".
      concat(user['first-name']).
      concat(" ").
      concat(user['last-name']).
      concat("?"));
  }
}

export { UsersComponent };