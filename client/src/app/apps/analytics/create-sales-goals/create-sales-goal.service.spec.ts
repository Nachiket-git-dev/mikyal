import { TestBed } from '@angular/core/testing';

import { CreateSalesGoalService } from './create-sales-goal.service';

describe('CreateSalesGoalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateSalesGoalService = TestBed.get(CreateSalesGoalService);
    expect(service).toBeTruthy();
  });
});
