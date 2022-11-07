import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import UserRegister from './../../models/UserRegister';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
class DatabaseService {

  private httpClient: HttpClient;
  private authService: AuthService;
  public static readonly API_URL = environment.API_URL;

  constructor(httpClient: HttpClient, authService : AuthService) {
    this.httpClient = httpClient;
    this.authService = authService;
  }

  private getAuthHeader() : HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Bearer' + this.authService.getToken()
    });
  }

  public getUsers() {
    return this.httpClient.get(DatabaseService.API_URL, {
      headers: this.getAuthHeader()
    });
  }

  public getUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.get<UserRegister>(DatabaseService.API_URL + '/' + user.id, {
      headers: this.getAuthHeader()
    });
  }

  public deleteUser(user: UserRegister): Observable<UserRegister> {
    return this.httpClient.delete<UserRegister>(DatabaseService.API_URL + '/' + user.id, {
      headers: this.getAuthHeader()
    });
  }

  public updateUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.patch<UserRegister>(DatabaseService.API_URL + '/' + user.id, user, {
      headers: this.getAuthHeader()
    });
  }

  public createUser(user: UserRegister): Observable<UserRegister>{
    return this.httpClient.post<UserRegister>(DatabaseService.API_URL, user, {
      headers: this.getAuthHeader()
    });
  }
}

export default DatabaseService;
