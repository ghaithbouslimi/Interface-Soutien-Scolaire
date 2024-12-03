import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/user/login-form/login-form.component';
import { RegisterFormComponent } from './shared/user/register-form/register-form.component';

const routes: Routes = [
  {
    path:'signup',component:RegisterFormComponent
  },
  {
    path:'login',component:LoginFormComponent
  },
  {
    path: 'front',
    loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule),
    // canLoad:[AuthGuard],
    // canActivate:[AuthGuard],
    // canActivateChild:[AuthGuard]
  },
   {
     path: 'admin',
     loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule),
  //   canLoad:[AuthGuard,AdminGuard],
  //   canActivate:[AuthGuard,AdminGuard],
  //   canActivateChild:[AuthGuard,AdminGuard]
   }
   , 
  {
    path: '**',
    redirectTo: 'front',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
