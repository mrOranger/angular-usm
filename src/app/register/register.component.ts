import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { MatDialog } from '@angular/material/dialog';
import DialogueComponent from '../dialogue/dialogue.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private authService: AuthService;
  private router: Router;
  private user: User;
  public errorCode: number;
  public dialog: MatDialog;

  constructor(authService : AuthService, router : Router, dialog: MatDialog) { 
    this.authService = authService;
    this.router = router;
    this.user = new User();
    this.dialog = dialog;
  }

  public ngOnInit(): void {
  }

  public openDialog(enterAnimationDuration: string, exitAnimationDuration: string, errorCode: number): void {
    this.dialog.open(DialogueComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        error: errorCode
      }
    });    
  }

  public async signUp(form: NgForm): Promise<void> {
    this.readData(form);
    const result = await this.authService.register(this.user).toPromise()
      .then(() => this.router.navigate(['/']))
      .catch((error: HttpErrorResponse) => this.openDialog('3000ms', '1500ms', error.status));
  }

  public signIn(): void {
    this.router.navigate(['login']);
  }

  private readData(form: NgForm): void {
    this.user.setFirstName(form.value.firstName);
    this.user.setLastName(form.value.lastName);
    this.user.setDateOfBirth(form.value.dateOfBirth);
    this.user.setEmail(form.value.email);
    this.user.setPassword(form.value.password);
    this.user.setTaxCode(this.generateTaxCode());
  }

  private generateTaxCode(): string {
    return this.user.getFirstName().substring(0, 3).toUpperCase()
      .concat(this.user.getLastName().substring(0, 3).toUpperCase())
      .concat(this.user.getDateOfBirth().split('-')[0].toString());
  }
}
