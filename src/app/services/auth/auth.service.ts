import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { JsonWebToken } from 'src/app/models/interfaces/JsonWebToken';
import User from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly API_AUTH: string = 'http://localhost:8000/api/auth/';
  public static readonly TOKEN: string = 'token';

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

  /*
    Used for query the db and authorize the user
  */
  public login(email: string, password: string): boolean {
    
    this.httpClient.post(AuthService.API_AUTH + 'login', {
      email: email,
      password: password
    }).subscribe((payload: any) => {
      
      localStorage.setItem(AuthService.TOKEN, payload.access_token);
      localStorage.setItem('users', JSON.stringify(payload));

      /* Once the user login, the event login is emitted */
      const user: User = new User('', payload.email, payload.first_name, '', new Date(), '');
      this.userLogin.emit(user);

      return true;
    }, (httpRespone: HttpErrorResponse) => {
      alert(httpRespone.message);
      return false;
    });

    return true;
  }

  /*
    Used for register a new user and authorize it
  */
  public register(username: string, email: string, password: string): boolean {
    localStorage.setItem(AuthService.TOKEN, email);

    /* Once the user signIn, the event signIn is emitted */
    const testUser: User = new User('', email, '', '', new Date(), '');
    this.userSignIn.emit(testUser);

    return true;
  }

  /*
    Used for logout the user
  */
  public logout(): boolean {
    localStorage.removeItem(AuthService.TOKEN);

    /* Once the user logout, the event logout is emitted */
    this.userLogout.emit();

    return true;
  }
}
