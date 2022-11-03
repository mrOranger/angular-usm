import { Router } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private authService: AuthService;
  private router: Router;

  constructor(authService : AuthService, router : Router) { 
    this.authService = authService;
    this.router = router;
  }

  public ngOnInit(): void {

  }

  public signUp(form: NgForm): void {
    const username: string = form.value.username;
    const email: string = form.value.email;
    const password: string = form.value.password;
    if (this.authService.register(username, email, password)) {
      this.router.navigate(['users']);
    }
  }

  public signIn(): void {
    this.router.navigate(['login']);
  }

}
