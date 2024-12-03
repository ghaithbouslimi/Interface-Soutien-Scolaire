import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-cource',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public courseCategory: {value:string, viewValue:string}[] = [
    { value: 'Web Developement', viewValue: 'Web Developement' },
    { value: 'UX Design', viewValue: 'UX Design' },
    { value: 'Dev-Ops', viewValue: 'Dev-Ops' },
    { value: 'Data Science', viewValue: 'Data Science' },

  ];

  courseForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    author: [null, Validators.required],
    category: [null, Validators.required],
    isFeatured:[false]
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private courseService: CoursesService,
              private snackBar: MatSnackBar,) {
    ;
  }


  ngOnInit(): void {
    
  }



 

  get f(){
    return this.courseForm.controls;
  }


  onSubmit(): void {
      this.courseService.addCourse(this.courseForm.value).subscribe({
        next:(data)=>{
          this.router.navigate(['/admin/courses']);
          this.snackBar.open("Course inserted successfully", 'Close')
        },
        error:(error)=>{
          this.snackBar.open("Operation Failed", 'Close');
          console.error(error)
        },
        complete:()=>{

        }
      })
  }

}
