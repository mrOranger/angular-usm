import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import User from '../models/User';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isUsedLoggedIn: boolean;
  private username: string;
  private authService: AuthService;
  private router: Router;

  constructor(authService: AuthService, router: Router) {
    this.isUsedLoggedIn = false;
    this.authService = authService;
    this.router = router;
    this.username = '';
  }

  public ngOnInit(): void {
    this.isUsedLoggedIn = this.authService.isUserLoggedIn();

    this.subscribeLogin();
    this.subscribeLogout();
    this.subscribeSignIn();
  }

  public isUserLoggedIn(): boolean {
    return this.isUsedLoggedIn;
  }

  private subscribeLogin() : void{
    this.authService.userLogin.subscribe((user: User) => {
      this.username = user.firstName;
      this.isUsedLoggedIn = true;
    });
  }

  private subscribeLogout(): void {
    this.authService.userLogout.subscribe(() => {
      this.username = '';
      this.isUsedLoggedIn = false;
    });
  }

  private subscribeSignIn(): void {
    this.authService.userSignIn.subscribe((user: User) => {
      this.username = user.firstName;
      this.isUsedLoggedIn = true;
    });
  }

  public logout(event : MouseEvent) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
