import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICourse } from 'src/app/shared/courses/course.model';
import { CoursesService } from 'src/app/shared/courses/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  coursesList:ICourse[]=[]

  constructor(    private coursesService:CoursesService,
    private snackBar:MatSnackBar) {

   }

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: (data:any)=>{
        this.coursesList=data['rows']
      },
      error: (error:any)=>{
              this.snackBar.open('Error Occured','x')

      }
    })
  }

}
