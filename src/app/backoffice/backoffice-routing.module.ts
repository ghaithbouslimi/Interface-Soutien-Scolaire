import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from '../shared/courses/add-course/add-course.component';
import { CoursesListComponent } from '../shared/courses/courses-list/courses-list.component';
import { AdminCoursesPageComponent } from './layers/admin-courses-page/admin-courses-page.component';
import { AdminLandpageComponent } from './layers/admin-landpage/admin-landpage.component';
import { UpdateCourseComponent } from '../shared/courses/update-course/update-course.component';
import { CourseResolver } from '../shared/courses/course.resolver';
import { AdminCoachesPageComponent } from './layers/admin-coaches-page/admin-coaches-page.component';
import { CoachListComponent } from '../shared/coach/coach-list/coach-list.component';
import { AddCoachComponent } from '../shared/coach/add-coach/add-coach.component';
import { UpdateCoachComponent } from '../shared/coach/update-coach/update-coach.component';
import { CoachResolver } from '../shared/coach/coach.resolver';
import { AdminUsersPageComponent } from './layers/admin-users-page/admin-users-page.component';
import { UserListComponent } from '../shared/user/user-list/user-list.component';
import { RegisterFormComponent } from '../shared/user/register-form/register-form.component';
import { UpdateUserComponent } from '../shared/user/update-user/update-user.component';
import { AdminTrainingPageComponent } from './layers/admin-training-page/admin-training-page.component';
import { ListFormationComponent } from '../shared/formations/list-formation/list-formation.component';
import { UpdateFormationComponent } from '../shared/formations/admin/update-formation/update-formation.component';
import { AdminListeFormationComponent } from '../shared/formations/admin/admin-liste-formation/admin-liste-formation.component';
import { AddFormationComponent } from '../shared/formations/admin/add-formation/add-formation.component';
import { FormationResolver } from '../shared/formations/formation.resolver';
import { AdminNavigationComponent } from './layers/admin-navigation/admin-navigation.component';
import { DashComponent } from './layers/dash/dash.component';



const routes: Routes = [
  {
    path:'',
    component:AdminNavigationComponent,
    children:[
      {
        path:'',
        component: DashComponent},
        {
          path:'courses',
          component: AdminCoursesPageComponent,
          children:[
            {
              path:'',
              component:CoursesListComponent
            },
            {
              path:'add',
              component: AddCourseComponent
            },
            {
              path:'update/:id',
              component: UpdateCourseComponent,
             resolve:{
                course:CourseResolver
             }
            }
          ]
        },
      //training
      {
        path:'training',
        component: AdminTrainingPageComponent,
        children:[
          {
            path:'',
            component:AdminListeFormationComponent
          },
          {
            path:'add',
            component: AddFormationComponent
          },
          {
            path:'update/:id',
            component: UpdateFormationComponent,
           resolve:{
              formation:FormationResolver
           }
          }
        ]
      },
      //coachs
      {
        path:'coaches',
        component: AdminCoachesPageComponent,
        children:[
          {
            path:'',
            component:CoachListComponent
          },
          {
            path:'add',
            component: AddCoachComponent
          },
          {
            path:'update/:id',
            component: UpdateCoachComponent,
            resolve:{
              coach:CoachResolver
            }
          }
        ]
      },
      //users
      {
        path:'users',
        component: AdminUsersPageComponent,
        children:[
          {
            path:'',
            component:UserListComponent
          },
          {
            path:'add',
            component: RegisterFormComponent
          },
          {
            path:'update/:id',
            component: UpdateUserComponent,
            //resolve:{
             // coach:CoachResolver
           // }
          }
        ]
      },
     
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }

