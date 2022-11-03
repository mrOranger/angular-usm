import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;

  constructor() { 
    this.isLoggedIn = true;
  }

  public isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  /*
    Used for query the db and authorize the user
  */
  public login(email: string, password: string): boolean {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  /*
    Used for register a new user and authorize it
  */
  public register(): void {
    
  }

  /*
    Used for logout the user
  */
  public logout(): void {
    this.isLoggedIn = false;
  }
}
