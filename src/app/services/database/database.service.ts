import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import User from 'src/app/models/User';

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

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(DatabaseService.API_URL, {
      headers: this.getAuthHeader()
    });
  }

  public getUser(user: User): Observable<User>{
    return this.httpClient.get<User>(DatabaseService.API_URL + '/' + user.getId(), {
      headers: this.getAuthHeader()
    });
  }

  public deleteUser(user: User): Observable<User> {
    return this.httpClient.delete<User>(DatabaseService.API_URL + '/' + user.getId(), {
      headers: this.getAuthHeader()
    });
  }

  public updateUser(user: User): Observable<User>{
    return this.httpClient.patch<User>(DatabaseService.API_URL + '/' + user.getId, user, {
      headers: this.getAuthHeader()
    });
  }

  public createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(DatabaseService.API_URL, user, {
      headers: this.getAuthHeader()
    });
  }
}

export default DatabaseService;
