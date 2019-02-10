import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { combineLatest, Subject } from 'rxjs';
import { finalize, map, takeUntil } from 'rxjs/operators';

import { Podcast } from '../../../../interfaces/podcast.interface';
import { PodcastsService } from '../../../../core/http/podcasts.service';
import { TracksService } from '../../../../core/http/tracks.service';
import { Track } from '../../../../interfaces/track.interface';
import { PlayerService } from '../../../../core/services/player.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit, OnDestroy {

  isLoading = true;

  podcast: Podcast;

  private destroyedSubject = new Subject<void>();

  constructor(
    private ar: ActivatedRoute,
    private ps: PodcastsService,
    private ts: TracksService,
    private pls: PlayerService
  ) {

  }

  ngOnInit() {
    this.ar
      .params
      .pipe(takeUntil(this.destroyedSubject))
      .subscribe(params => {
        combineLatest(
          this.ps.getById(params.id),
          this.ts.getList(params.id)
        )
          .pipe(
            map(([podcast, tracks]) => {
              if (!podcast) {
                return;
              }

              podcast.tracks = tracks;

              return podcast;
            }),
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe(podcast => {
            this.podcast = podcast;
          });
      });
  }

  onPlayClick(track: Track, podcast: Podcast): void {
    this.pls.currentTrack = track;
    this.pls.queue = podcast.tracks;
    this.pls.play();
  }

  onPauseClick(): void {
    this.pls.pause();
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
