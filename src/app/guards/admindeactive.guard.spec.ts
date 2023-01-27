import { TestBed } from '@angular/core/testing';

import { AdmindeactiveGuard } from './admindeactive.guard';

describe('AdmindeactiveGuard', () => {
  let guard: AdmindeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmindeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
