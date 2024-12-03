import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICourse } from '../course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course:ICourse;

  constructor() { }

  ngOnInit(): void {
  }

  getCourseCover(url){
      return url ? `${environment.API_URL}/${url}` : 'assets/course.jpg'
  }

}
