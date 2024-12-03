import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { RouterModule } from '@angular/router';
import { AdminUserBadgeComponent } from './admin-user-badge/admin-user-badge.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserRoleComponent } from './update-user-role/update-user-role.component';



@NgModule({
  declarations: [RegisterFormComponent, 
    LoginFormComponent, 
    UserBadgeComponent, AdminUserBadgeComponent, ProfileComponent, UserListComponent, UpdateUserComponent, UpdateUserRoleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[RegisterFormComponent, 
    LoginFormComponent,
    UserBadgeComponent,
    AdminUserBadgeComponent,
    UpdateUserRoleComponent,
    ProfileComponent
  ]
})
export class UserModule { }
