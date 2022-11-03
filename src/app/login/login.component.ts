import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authService: AuthService;
  private router: Router;

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  ngOnInit(): void {

  }

  public singIn(form: NgForm): void {
    const email: string = form.value.email;
    const password: string = form.value.password;
    if (this.authService.login(email, password)) {
      this.router.navigate(['users']);
    } else {
      console.log('Non a valid user!');
    }
  }

  public signUp(): void {
    this.router.navigate(['register']);
  }

}
