import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRightbarComponent } from './dashboard-rightbar.component';

describe('DashboardRightbarComponent', () => {
  let component: DashboardRightbarComponent;
  let fixture: ComponentFixture<DashboardRightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
