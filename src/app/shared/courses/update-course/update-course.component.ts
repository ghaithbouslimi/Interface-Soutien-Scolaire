import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CoursesService } from '../courses.service';
import { AddChapterFormComponent } from './add-chapter-form/add-chapter-form.component';
import { UpdateCourseStateService } from './update-course.state.service';

@Component({
  selector: 'app-update-cource',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss'],
})
export class UpdateCourseComponent implements OnInit {
  currentCourseId: string = '';
  currentPhotoUrl: string = '';



  public ngSelect?: any;

  public courseCategory: any = [
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
    isFeatured: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public updateCourseStateService:UpdateCourseStateService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        let course = data['course'];
        this.currentCourseId = course.id;
        this.currentPhotoUrl = course.cover ?? './assets/defaultCourse.png';
        this.courseForm.patchValue({
          
          title: course['title'],
          description: course['description'],
          author: course['author'],
          category: course['category'],
          isFeatured: course['isFeatured'],
        });
        this.updateCourseStateService.loadChapters(course['chapters'])
        this.ngSelect = course.category;
      },
      error: (error) => console.log(error),
    });
  }

  get f() {
    return this.courseForm.controls;
  }

  onSubmit(): void {
    let course = this.courseForm.value;
    this.updateCourseStateService.getChapters().subscribe(chapters=>course.chapters=chapters);

    this.coursesService.updateCourse(this.currentCourseId, course).subscribe({
      next: (data) => {
        this.router.navigate(['/admin/courses']);
        this.snackBar.open('Course Updated Successfully', 'x');
      },
      error: (error) => {
        this.snackBar.open('Fail to update Course', 'x');
        console.error(error);
      },
      complete: () => {},
    });
  }

  getPhotoUrl(url: string) {
    return url === './assets/defaultCourse.png'
      ? './assets/defaultCourse.png'
      : `${environment.API_URL}/${url}`;
  }
  refresh(event: any) {
    console.log(`%c Refresh()`, 'background-color:green;color:white');
  }
  getFullUrlPhoto(photoHrl: string): string {
    return photoHrl
      ? `${environment.API_URL}/${photoHrl}`
      : 'assets/defaultCourse.png';
  }

  displayAddChapterFormDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '70%';

    let dialogRef = this.dialog.open(AddChapterFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe({
      next:(result:any) => {
       this.updateCourseStateService.addChapter(result.data)
    }
  });
  }
}
