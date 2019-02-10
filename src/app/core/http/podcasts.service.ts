import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Podcast } from '../../interfaces/podcast.interface';
import { podcasts } from '../../fixtures/podcasts.fixture';
import { APP_CONFIG } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  getById(id: string): Observable<Podcast> {
    return of(podcasts.find(p => p.id === id))
      .pipe(delay(APP_CONFIG.syntheticDelay));
  }

  getList(): Observable<Podcast[]> {
    return of(podcasts)
      .pipe(delay(APP_CONFIG.syntheticDelay));
  }

}
