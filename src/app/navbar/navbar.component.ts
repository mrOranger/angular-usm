import { DialogUserNewComponent } from './../dialog-user-new/dialog-user-new.component';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import User from '../models/User';
import { AuthService } from '../services/auth/auth.service';
import { UserInterface } from '../models/interfaces/UserInterface';

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

  @Output("onNewEvent") private updateEvent: EventEmitter<UserInterface>;

  constructor(authService: AuthService, router: Router, private dialog: MatDialog) {
    this.isUsedLoggedIn = false;
    this.authService = authService;
    this.router = router;
  }

  public ngOnInit(): void {
    this.isUsedLoggedIn = this.authService.isUserLoggedIn();

    if (this.isUsedLoggedIn) {
      this.setUsername(JSON.parse(localStorage.getItem('user'))['first-name']);
    }

    this.subscribeLogin();
    this.subscribeLogout();
    this.subscribeSignIn();
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public isUserLoggedIn(): boolean {
    return this.isUsedLoggedIn;
  }

  private subscribeLogin() : void{
    this.authService.userLogin.subscribe((user: User) => {
      this.username = user.getFirstName();
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
      this.username = user.getFirstName();
      this.isUsedLoggedIn = true;
    });
  }

  public newUser(): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(DialogUserNewComponent, {
      width: '500px',
      data: {
        id: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        taxCode: '',
        email: ''
      }
    });
    //this.afterDialogClose(dialogRef);
  }

  private afterDialogClose(dialogRef: MatDialogRef<any>): void {
    dialogRef.afterClosed().subscribe(
      (result) => {
        this.updateEvent.emit(result);
      }
    );
  } 

  public logout(event : MouseEvent) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
