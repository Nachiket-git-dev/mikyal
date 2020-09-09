import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommoduleComponent } from './custommodule.component';

describe('CustommoduleComponent', () => {
  let component: CustommoduleComponent;
  let fixture: ComponentFixture<CustommoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustommoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustommoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
