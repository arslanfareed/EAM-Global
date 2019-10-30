import { TestBed } from '@angular/core/testing';

import { TeamCostService } from './team-cost.service';

describe('TeamCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamCostService = TestBed.get(TeamCostService);
    expect(service).toBeTruthy();
  });
});
