import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsettingsComponent } from './billingsettings.component';

describe('BillingsettingsComponent', () => {
  let component: BillingsettingsComponent;
  let fixture: ComponentFixture<BillingsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
