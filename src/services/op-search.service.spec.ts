import { TestBed } from '@angular/core/testing';

import { OpSearchService } from './op-search.service';

describe('OpSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpSearchService = TestBed.get(OpSearchService);
    expect(service).toBeTruthy();
  });
});
