import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import DatabaseService from './services/database/database.service';
import UserRegister from './models/UserRegister';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent implements OnInit{

  private databaseService: DatabaseService;
  private users : Observable<Object>;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
    this.users = this.databaseService.getUsers();
  }

  public ngOnInit(): void {
    this.users.subscribe((user) => {
      console.log(user);
    });
  }
}

export default AppComponent;