import { TestBed } from '@angular/core/testing';

import { FavoriteUserService } from './favorite-user.service';

describe('FavoriteUserService', () => {
  let service: FavoriteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
