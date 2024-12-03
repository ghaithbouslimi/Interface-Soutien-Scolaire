import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import { CoachListComponent } from './coach-list/coach-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxUploaderModule } from 'ngx-uploader';
import { MaterialModule } from '../material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatStepper, MatStepperModule } from '@angular/material/stepper';




@NgModule({
  declarations: [
   AddCoachComponent,
    UpdateCoachComponent,
    CoachListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxUploaderModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatPaginatorModule,
    MatStepperModule,
  ],

  exports:[
   AddCoachComponent,
   UpdateCoachComponent,
   CoachListComponent
  ]
})
export class CoachModule {
}
