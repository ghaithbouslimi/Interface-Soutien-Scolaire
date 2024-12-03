import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingPageComponent } from './admin-training-page.component';

describe('AdminTrainingPageComponent', () => {
  let component: AdminTrainingPageComponent;
  let fixture: ComponentFixture<AdminTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrainingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
