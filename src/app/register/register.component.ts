import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import User from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private authService: AuthService;
  private router: Router;
  private user: User;

  constructor(authService : AuthService, router : Router) { 
    this.authService = authService;
    this.router = router;
    this.user = new User();
  }

  public ngOnInit(): void {
  }

  public async signUp(form: NgForm): Promise<void> {
    this.readData(form);
    try {
      const response = await this.authService.register(this.user).toPromise();
      console.log(response);
    } catch (error) {
      switch (error.status) {
        case 401:
          alert("Non autorizzato!");
          break;
        case 404:
          alert("404 not found!");
          break;
        case 500:
          alert("Errore interno al server!");
          break;
      }
    }
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
