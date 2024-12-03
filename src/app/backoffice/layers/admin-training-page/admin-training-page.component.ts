import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-training-page',
  templateUrl: './admin-training-page.component.html',
  styleUrls: ['./admin-training-page.component.scss']
})
export class AdminTrainingPageComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
