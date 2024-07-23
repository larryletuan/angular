import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysicFormComponent } from './analysic-form.component';

describe('AnalysicFormComponent', () => {
  let component: AnalysicFormComponent;
  let fixture: ComponentFixture<AnalysicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
