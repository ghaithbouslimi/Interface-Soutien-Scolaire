import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserBadgeComponent } from './admin-user-badge.component';

describe('AdminUserBadgeComponent', () => {
  let component: AdminUserBadgeComponent;
  let fixture: ComponentFixture<AdminUserBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
