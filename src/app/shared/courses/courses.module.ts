import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UploadCourseCoverComponent } from './upload-course-cover/upload-course-cover.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploadCourseChapitresComponent } from './upload-course-chapitres/upload-course-chapitres.component';
import { AddChapterFormComponent } from './update-course/add-chapter-form/add-chapter-form.component';
import { ChaptersListComponent } from './update-course/chapters-list/chapters-list.component';
import { UploadRessourceComponent } from './upload-ressource/upload-ressource.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';




@NgModule({
  declarations: [
    AddCourseComponent,
    UpdateCourseComponent,
    CoursesListComponent,
    UploadCourseCoverComponent,
    UploadCourseChapitresComponent,
    AddChapterFormComponent,
    ChaptersListComponent,
    UploadRessourceComponent,
    CourseCardComponent,
    CoursesDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxUploaderModule,
    AngularEditorModule
  ],
  exports:[
    AddCourseComponent,
    UpdateCourseComponent,
    CoursesListComponent,
    UploadCourseCoverComponent,
    UploadCourseChapitresComponent,
    AddChapterFormComponent,
    ChaptersListComponent,
    UploadRessourceComponent,
    AngularEditorModule,
    CourseCardComponent
  ]
})
export class CoursesModule { }
