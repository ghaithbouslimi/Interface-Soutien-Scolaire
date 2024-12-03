import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormationComponent } from '../shared/formations/list-formation/list-formation.component';
import { UpdateFormationComponent } from '../shared/formations/admin/update-formation/update-formation.component';
import { NotfoundPageComponent } from '../shared/notfound-page/notfound-page.component';
import { AboutusPageComponent } from './layers/aboutus-page/aboutus-page.component';
import { CertificationPageComponent } from './layers/certification-page/certification-page.component';
import { ContactPageComponent } from './layers/contact-page/contact-page.component';
import { CoursesPageComponent } from './layers/courses-page/courses-page.component';
import { FormationPageComponent } from './layers/formation-page/formation-page.component';
import { GuestWrapComponent } from './layers/guest-wrap/guest-wrap.component';
import { HomePageComponent } from './layers/home-page/home-page.component';
import { LandpageComponent } from './layers/landpage/landpage.component';
import { TrainingsessionPageComponent } from './layers/trainingsession-page/trainingsession-page.component';
import { AddFormationComponent } from '../shared/formations/admin/add-formation/add-formation.component';
import { ProfileComponent } from '../shared/user/profile/profile.component';
import { CoursesDetailComponent } from '../shared/courses/courses-detail/courses-detail.component';
import { CourseResolver } from '../shared/courses/course.resolver';

const routes: Routes = [
  {
    path: '', component: GuestWrapComponent,
    children: [
      {
        path: 'home',
        component: LandpageComponent,
      },
      {
        path: 'formation',
        component: FormationPageComponent,
        children: [
          {
            path: '',
            component: ListFormationComponent
          },

        ]
      },

      //Courses
      {
        path: 'courses',
        component: CoursesPageComponent,

      },
      {
        path: 'course-detail/:id',
        component:CoursesDetailComponent,
        resolve:{
          course:CourseResolver
        }
      },
      {
        path: 'training-session',
        component: TrainingsessionPageComponent,

      },
      {
        path: 'profile',
        component: ProfileComponent,

      },
      {
        path: 'certifications',
        component: CertificationPageComponent,

      },
      {
        path: 'about',
        component: AboutusPageComponent,

      },
      {
        path: 'contact',
        component: ContactPageComponent,

      },
      {
        path: "**", redirectTo: "home", pathMatch: "full"
      }
    ],
    

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
