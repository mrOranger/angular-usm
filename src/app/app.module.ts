import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { RouteGuardsService } from './services/route-guards/route-guards.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import DatabaseService from './services/database/database.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserDataComponent,
    UserDetailComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DatabaseService,
    RouteGuardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
