import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChapter, UpdateCourseStateService } from '../update-course.state.service';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.scss']
})
export class ChaptersListComponent implements OnInit {
  chapters$:Observable<IChapter[]>
  
  constructor(private updateCoureseStateService:UpdateCourseStateService) { }

  ngOnInit(): void {
    this.chapters$=this.updateCoureseStateService.getChapters()
  }

  removeChapter(id:string){
    this.updateCoureseStateService.removeChapter(id);
  }
}
