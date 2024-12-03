import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ICourse } from '../course.model';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {
  currentCourse:ICourse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.currentCourse=data['course'];
      },
      error: (error) => console.log(error),
    });
  }

  getCorseCover(url){
    return url ?
    `${environment.API_URL}/${url}`:
    'assets/defaultCourse.png';
  }

}
