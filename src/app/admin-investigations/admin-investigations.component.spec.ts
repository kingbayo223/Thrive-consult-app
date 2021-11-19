import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvestigationsComponent } from './admin-investigations.component';

describe('AdminInvestigationsComponent', () => {
  let component: AdminInvestigationsComponent;
  let fixture: ComponentFixture<AdminInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
