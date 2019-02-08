import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { PodcastCategory } from '../../interfaces/podcast-category.interface';
import { podcastCategories } from '../../fixtures/podcast-categories.fixture';

@Injectable({
  providedIn: 'root'
})
export class PodcastCategoriesService {

  getList(): Observable<PodcastCategory[]> {
    return of(podcastCategories)
      .pipe(delay(1000));
  }

}
