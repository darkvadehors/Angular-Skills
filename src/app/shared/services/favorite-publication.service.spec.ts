import { TestBed } from '@angular/core/testing';

import { FavoritePublicationService } from './favorite-publication.service';

describe('FavoritePublicationService', () => {
  let service: FavoritePublicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritePublicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
