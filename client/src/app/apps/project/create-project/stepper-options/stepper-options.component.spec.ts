import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOptionsComponent } from './stepper-options.component';

describe('StepperOptionsComponent', () => {
  let component: StepperOptionsComponent;
  let fixture: ComponentFixture<StepperOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
