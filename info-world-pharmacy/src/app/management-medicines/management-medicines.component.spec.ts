import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMedicinesComponent } from './management-medicines.component';

describe('ManagementMedicinesComponent', () => {
  let component: ManagementMedicinesComponent;
  let fixture: ComponentFixture<ManagementMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementMedicinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
