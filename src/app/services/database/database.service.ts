import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import User from 'src/app/models/User';
import { UserInterface } from 'src/app/models/interfaces/UserInterface';

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

  public getUsers(): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(DatabaseService.API_URL, {
      headers: this.getAuthHeader()
    });
  }

  public getUser(user: UserInterface): Observable<UserInterface>{
    return this.httpClient.get<UserInterface>(DatabaseService.API_URL + '/' + user.id, {
      headers: this.getAuthHeader()
    });
  }

  public deleteUser(user: UserInterface): Observable<UserInterface> {
    return this.httpClient.delete<UserInterface>(DatabaseService.API_URL + '/' + user.id, {
      headers: this.getAuthHeader()
    });
  }

  public updateUser(user: Object): Observable<Object>{
    return this.httpClient.patch<Object>(DatabaseService.API_URL + '/' + user['id'], user, {
      headers: this.getAuthHeader()
    });
  }

  public createUser(user: UserInterface): Observable<UserInterface>{
    return this.httpClient.post<UserInterface>(DatabaseService.API_URL, user, {
      headers: this.getAuthHeader()
    });
  }
}

export default DatabaseService;
