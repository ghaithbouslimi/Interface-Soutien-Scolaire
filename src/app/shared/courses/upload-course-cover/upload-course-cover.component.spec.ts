import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCourseCoverComponent } from './upload-course-cover.component';

describe('UploadCourseCoverComponent', () => {
  let component: UploadCourseCoverComponent;
  let fixture: ComponentFixture<UploadCourseCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCourseCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCourseCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
