import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import User from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authService: AuthService;
  private router: Router;
  public credentialError: boolean;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
    this.credentialError = false;
  }

  ngOnInit(): void {

    this.authService.userSignIn.subscribe((user: User) => {
      this.router.navigate(['/']);
    });

  }

  public singIn(form: NgForm): void {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.authService.login(email, password).toPromise()
      .then(() => this.router.navigate(['users']))
      .catch((error: HttpErrorResponse) => {
        this.credentialError = true;
        setTimeout(() => {
          this.credentialError = false;
        }, 5000);
      });
  }

  public signUp(): void {
    this.router.navigate(['register']);
  }

}
