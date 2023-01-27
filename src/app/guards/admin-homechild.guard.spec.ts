import { TestBed } from '@angular/core/testing';

import { AdminHomechildGuard } from './admin-homechild.guard';

describe('AdminHomechildGuard', () => {
  let guard: AdminHomechildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminHomechildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
