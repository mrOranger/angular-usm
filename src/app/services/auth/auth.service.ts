import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly TOKEN : string= 'token';

  constructor() { 
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem(AuthService.TOKEN);
  }

  /*
    Used for query the db and authorize the user
  */
  public login(email: string, password: string): boolean {
    localStorage.setItem(AuthService.TOKEN, email);
    return true;
  }

  /*
    Used for register a new user and authorize it
  */
  public register(): void {
    
  }

  /*
    Used for logout the user
  */
  public logout(): boolean {
    localStorage.removeItem(AuthService.TOKEN);
    return true;
  }
}
