import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import DatabaseService from './services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent implements OnInit{

  constructor() {
  }

  public ngOnInit(): void {
  }
}

export default AppComponent;