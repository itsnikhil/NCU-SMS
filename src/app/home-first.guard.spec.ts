import { TestBed, async, inject } from '@angular/core/testing';

import { HomeFirstGuard } from './home-first.guard';

describe('HomeFirstGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeFirstGuard]
    });
  });

  it('should ...', inject([HomeFirstGuard], (guard: HomeFirstGuard) => {
    expect(guard).toBeTruthy();
  }));
});
