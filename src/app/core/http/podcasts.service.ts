import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Podcast } from '../../interfaces/podcast.interface';
import { PODCASTS_FIXTURE } from '../../fixtures/podcasts.fixture';
import { APP_CONFIG } from '../../app.config';
import { PodcastsQuery } from '../../interfaces/queries/podcasts-query.interface';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  getById(id: string): Observable<Podcast> {
    return of(PODCASTS_FIXTURE.find(p => p.id === id))
      .pipe(delay(APP_CONFIG.syntheticDelay));
  }

  getList(query?: PodcastsQuery): Observable<Podcast[]> {
    console.log('GET PODCASTS LIST', query);
    return of(PODCASTS_FIXTURE)
      .pipe(
        map(podcasts => {
            if (!query) {
              return podcasts;
            }

            return podcasts
              .filter(p => {
                let isMatch = true;

                if (query.query) {
                  const queryRegexp = new RegExp(query.query, 'gi');

                  isMatch = !!(
                    p.name.match(queryRegexp)
                    || p.description.match(queryRegexp)
                  );
                }

                if (query.categoryId) {
                  isMatch = isMatch && p.categoryId === query.categoryId;
                }

                return isMatch;
              });
          }
        ),
        delay(APP_CONFIG.syntheticDelay)
      );
  }

}
