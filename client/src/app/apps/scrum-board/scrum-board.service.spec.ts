import { TestBed } from '@angular/core/testing';

import { ScrumBoardService } from './scrum-board.service';

describe('ScrumBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrumBoardService = TestBed.get(ScrumBoardService);
    expect(service).toBeTruthy();
  });
});
