import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;

  constructor() { 
    this.isLoggedIn = false;
  }

  public isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  /*
    Used for query the db and authorize the user
  */
  public login(): void {
    
  }

  /*
    Used for register a new user and authorize it
  */
  public register(): void {
    
  }
}
