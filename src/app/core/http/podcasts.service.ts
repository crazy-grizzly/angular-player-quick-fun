import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Podcast } from '../../interfaces/podcast.interface';
import { podcasts } from '../../fixtures/podcasts.fixture';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  getById(id: number): Observable<Podcast> {
    return of(podcasts.find(p => p.id === id))
      .pipe(delay(1000));
  }

  getList(): Observable<Podcast[]> {
    return of(podcasts)
      .pipe(delay(1000));
  }

}
