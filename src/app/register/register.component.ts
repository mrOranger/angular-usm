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

  private firstName: string;
  private lastName: string;
  private dateOfBirth: Date;
  private email: string;
  private password: string;

  constructor(authService : AuthService, router : Router) { 
    this.authService = authService;
    this.router = router;
  }

  public ngOnInit(): void {

  }

  public signUp(form: NgForm): void {
    this.readData(form);
    console.log('First name: ' + this.firstName);
    console.log('Last name: ' + this.lastName);
    console.log('Date of birth: ' + this.dateOfBirth);
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('TaxCode: ' + this.generateTaxCode());

    /*if (this.authService.register(username, email, password)) {
      this.router.navigate(['users']);
    }*/
  }

  public signIn(): void {
    this.router.navigate(['login']);
  }

  private readData(form: NgForm): void {
    this.firstName = form.value.firstName;
    this.lastName = form.value.lastName;
    this.dateOfBirth = new Date(form.value.dateOfBirth);
    this.email = form.value.email;
    this.password = form.value.password;
  }

  private generateTaxCode(): string {
    return this.firstName.substring(0, 3).toUpperCase()
      .concat(this.lastName.substring(0, 3).toUpperCase())
      .concat(this.dateOfBirth.getFullYear().toString());
  }

}
