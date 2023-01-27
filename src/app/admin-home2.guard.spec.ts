import { TestBed } from '@angular/core/testing';

import { AdminHome2Guard } from './admin-home2.guard';

describe('AdminHome2Guard', () => {
  let guard: AdminHome2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminHome2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
