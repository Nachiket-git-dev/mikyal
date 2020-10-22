import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesGoalsComponent } from './create-sales-goals.component';

describe('CreateSalesGoalsComponent', () => {
  let component: CreateSalesGoalsComponent;
  let fixture: ComponentFixture<CreateSalesGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalesGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalesGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
