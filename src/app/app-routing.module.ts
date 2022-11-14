import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouteGuardsService } from './services/route-guards/route-guards.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'users',
  component: UsersComponent,
  canActivate: [RouteGuardsService]
}, {
  path: 'users/:id',
  component: UserDataComponent,
  canActivate: [RouteGuardsService]
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'users'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
