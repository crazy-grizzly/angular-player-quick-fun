import { TestBed } from '@angular/core/testing';

import { PodcastCategoriesService } from './podcast-categories.service';

describe('PodcastCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PodcastCategoriesService = TestBed.get(PodcastCategoriesService);
    expect(service).toBeTruthy();
  });
});
