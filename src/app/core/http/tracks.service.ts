import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Track } from '../../interfaces/track.interface';
import { TRACKS_FIXTURE } from '../../fixtures/tracks.fixture';
import { APP_CONFIG } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  getById(id: string): Observable<Track> {
    return of(TRACKS_FIXTURE.find(p => p.id === id))
      .pipe(delay(APP_CONFIG.syntheticDelay));
  }

  getList(podcastId?: string): Observable<Track[]> {
    return of(TRACKS_FIXTURE)
      .pipe(
        map(tracks => {
          if (!podcastId) {
            return tracks;
          }

          return tracks.filter(t => t.podcastId === podcastId);
        }),
        delay(APP_CONFIG.syntheticDelay)
      );
  }

}
