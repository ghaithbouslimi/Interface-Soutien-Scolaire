import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFormationComponent } from './list-formation/list-formation.component';
import { UpdateFormationComponent } from './admin/update-formation/update-formation.component';
import { AdminListeFormationComponent } from './admin/admin-liste-formation/admin-liste-formation.component';
import { AdminPlanifierFormationComponent } from './admin/admin-planifier-formation/admin-planifier-formation.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddFormationComponent } from './admin/add-formation/add-formation.component';





@NgModule({
  declarations: [
    AddFormationComponent,
    ListFormationComponent,
    UpdateFormationComponent,
    AdminListeFormationComponent,
    AdminPlanifierFormationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  exports:[
    ListFormationComponent
  ]
})
export class FormationsModule { }
