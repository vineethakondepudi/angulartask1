import { TestBed } from '@angular/core/testing';

import { AdiminHomeGuard } from './adimin-home.guard';

describe('AdiminHomeGuard', () => {
  let guard: AdiminHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdiminHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
