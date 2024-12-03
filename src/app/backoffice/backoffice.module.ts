import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminNavbarComponent } from './layers/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './layers/admin-footer/admin-footer.component';
import { AdminLandpageComponent } from './layers/admin-landpage/admin-landpage.component';
import { AdminCoursesPageComponent } from './layers/admin-courses-page/admin-courses-page.component';
import { AdminTrainingPageComponent } from './layers/admin-training-page/admin-training-page.component';
import { AdminUsersPageComponent } from './layers/admin-users-page/admin-users-page.component';
import { AdminCoachesPageComponent } from './layers/admin-coaches-page/admin-coaches-page.component';
import { UserModule } from '../shared/user/user.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursesModule } from '../shared/courses/courses.module';
import { CoachModule } from '../shared/coach/coach.module';
import { FormationsModule } from '../shared/formations/formations.module';
import { AdminNavigationComponent } from './layers/admin-navigation/admin-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminDashboardComponent } from './layers/admin-dashboard/admin-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashComponent } from './layers/dash/dash.component';


@NgModule({
  declarations: [
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminLandpageComponent,
    AdminCoursesPageComponent,
    AdminTrainingPageComponent,
    AdminUsersPageComponent,
    AdminCoachesPageComponent,
    AdminNavigationComponent,
    AdminDashboardComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    UserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoursesModule,
    CoachModule,
    FormationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class BackofficeModule { }
