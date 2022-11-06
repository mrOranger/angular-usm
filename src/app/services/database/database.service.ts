import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserRegister from './../../models/UserRegister';

@Injectable({
  providedIn: 'root'
})
class DatabaseService {

  private httpClient: HttpClient;
  public static readonly API_URL = environment.API_URL;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getUsers() {
    return this.httpClient.get(DatabaseService.API_URL);
  }

  public getUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.get<UserRegister>(DatabaseService.API_URL + '/' + user.id);
  }

  public deleteUser(user: UserRegister): Observable<UserRegister> {
    return this.httpClient.delete<UserRegister>(DatabaseService.API_URL + '/' + user.id);
  }

  public updateUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.patch<UserRegister>(DatabaseService.API_URL + '/' + user.id, user);
  }

  public createUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.post<UserRegister>(DatabaseService.API_URL, user);
  }
}

export default DatabaseService;
