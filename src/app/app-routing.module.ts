import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'users',
  component: UsersComponent
}, {
  path: 'users/:id/',
  component: UserDataComponent
}, {
  path: 'users/new',
  component: UserDetailComponent
}, {
  path: 'users/:id/edit',
  component: UserDetailComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'users'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
