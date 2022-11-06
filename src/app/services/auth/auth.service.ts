import { Injectable, Output, EventEmitter } from '@angular/core';
import User from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly TOKEN: string = 'token';
  @Output('login') public userLogin: EventEmitter<User>;
  @Output('register') public userSignIn: EventEmitter<User>;
  @Output('logout') public userLogout: EventEmitter<any>;

  constructor() { 
    this.userLogin = new EventEmitter<User>();
    this.userSignIn = new EventEmitter<User>();
    this.userLogout = new EventEmitter();
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN);
  }

  /*
    Used for query the db and authorize the user
  */
  public login(email: string, password: string): boolean {
    localStorage.setItem(AuthService.TOKEN, email);

    /* Once the user login, the event login is emitted */
    const testUser: User = new User('', email, '', '', new Date(), '');
    this.userLogin.emit(testUser);

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
