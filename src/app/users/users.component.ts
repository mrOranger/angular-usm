import { UserInterface } from 'src/app/models/interfaces/UserInterface';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import DatabaseService from '../services/database/database.service';

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
      subscribe(() => {
        this.users = this.users[0]['data'];
      });
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

  public onUpdateUser(user: UserInterface): void {

    const userCopy: Object = {
      id: user.id,
      "first-name": user.firstName,
      "last-name": user.lastName,
      "date-of-birth": user.dateOfBirth,
      "tax-code": user.taxCode,
      email: user.email
    }

    this.databaseService.updateUser(userCopy).subscribe(
      (response) => {
        if (response['success']) {
          this.users.forEach((currUser, index) => {
            if (currUser.id === user.id) {
              this.users[index].id = response['data'].id;
              this.users[index]['email'] = response['data']['email'];
              this.users[index]['first-name'] = response['data']['first-name'];
              this.users[index]['last-name'] = response['data']['last-name'];
              this.users[index]['date-of-birth'] = response['data']['date-of-birth'];
              this.users[index]['tax-code'] = response['data']['tax-code'];
            }
          });
        }
      }
    );
  }
}

export { UsersComponent };