import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRessourceComponent } from './upload-ressource.component';

describe('UploadRessourceComponent', () => {
  let component: UploadRessourceComponent;
  let fixture: ComponentFixture<UploadRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
