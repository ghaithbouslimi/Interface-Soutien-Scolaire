import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestWrapComponent } from './guest-wrap.component';

describe('GuestWrapComponent', () => {
  let component: GuestWrapComponent;
  let fixture: ComponentFixture<GuestWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
