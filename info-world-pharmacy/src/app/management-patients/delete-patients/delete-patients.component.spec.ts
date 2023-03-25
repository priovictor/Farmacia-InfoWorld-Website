import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePatientsComponent } from './delete-patients.component';

describe('DeletePatientsComponent', () => {
  let component: DeletePatientsComponent;
  let fixture: ComponentFixture<DeletePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
