import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsessionPageComponent } from './trainingsession-page.component';

describe('TrainingsessionPageComponent', () => {
  let component: TrainingsessionPageComponent;
  let fixture: ComponentFixture<TrainingsessionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsessionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
