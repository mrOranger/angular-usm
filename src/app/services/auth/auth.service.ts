import { MonoTypeOperatorFunction, Observable, tap } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { JsonWebToken } from 'src/app/models/interfaces/JsonWebToken';
import User from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly TOKEN: string = 'token';
  public static readonly USER_TOKEN: string = 'user';

  @Output('login') public userLogin: EventEmitter<User>;
  @Output('register') public userSignIn: EventEmitter<User>;
  @Output('logout') public userLogout: EventEmitter<any>;

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) { 
    this.userLogin = new EventEmitter<User>();
    this.userSignIn = new EventEmitter<User>();
    this.userLogout = new EventEmitter();

    this.httpClient = httpClient;
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN);
  }

  public login(email: string, password: string): Observable<Object> {
    
    return this.httpClient.post(environment.API_URL_AUTH_LOGIN, {
      email: email,
      password: password
    }).pipe(this.manageResponseLogin());

  }

  private manageResponseLogin(): MonoTypeOperatorFunction<JsonWebToken> {
    return tap((payload: JsonWebToken) => {
      localStorage.setItem(AuthService.TOKEN, payload.access_token);
      localStorage.setItem(AuthService.USER_TOKEN, JSON.stringify(payload));
      const user: User = new User();
      user.setEmail(payload.email);
      user.setFirstName(payload.first_name);
      this.userSignIn.emit(user);
      return true;
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  public register(user : User) : Observable<Object> {
    return this.httpClient.post(environment.API_URL_AUTH_SIGNUP, user.toObject())
      .pipe(this.manageResponseSignUp(user));
  }

  private manageResponseSignUp(user : User): MonoTypeOperatorFunction<JsonWebToken> {
    return tap((payload: JsonWebToken) => {
      localStorage.setItem(AuthService.TOKEN, payload.access_token);
      localStorage.setItem(AuthService.USER_TOKEN, JSON.stringify(payload));
      this.userSignIn.emit(user);
      return true;
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });    
  }

  public logout(): boolean {
    localStorage.removeItem(AuthService.TOKEN);
    localStorage.removeItem(AuthService.USER_TOKEN);
    this.userLogout.emit();
    return true;
  }

  public getUser(): User{
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      const user: User = new User();      
      return user;
    }
    return new User();      
  }

  public getToken() {
    return localStorage.getItem(AuthService.TOKEN);
  }
}
