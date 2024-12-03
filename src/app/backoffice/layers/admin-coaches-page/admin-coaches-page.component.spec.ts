import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoachesPageComponent } from './admin-coaches-page.component';

describe('AdminCoachesPageComponent', () => {
  let component: AdminCoachesPageComponent;
  let fixture: ComponentFixture<AdminCoachesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoachesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoachesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
