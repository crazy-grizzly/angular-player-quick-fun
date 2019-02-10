import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Track } from '../../../interfaces/track.interface';
import { PlayerService } from '../../../core/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit, OnDestroy {

  track: Track;

  isShow: boolean;
  isPlaying: boolean;

  audio: HTMLAudioElement;

  private destroyedSubject = new Subject<void>();

  constructor(
    private ps: PlayerService,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.ps
      .currentTrack$
      .pipe(takeUntil(this.destroyedSubject))
      .subscribe(track => {
        this.cleanupAudio();

        this.track = track;
        this.cdr.markForCheck();

        const audio = new Audio();
        audio.preload = 'metadata';
        audio.src = track.url;

        // Get and display duration and etc.
        audio.addEventListener(
          'loadedmetadata',
          () => {
            this.audio = audio;
            this.cdr.markForCheck();

            this.playPause();
          }
        );

        // Manually trigger view to update current play time and progressbar position
        audio.addEventListener(
          'timeupdate',
          () => {
            this.cdr.markForCheck();
          }
        );
      });

    this.ps
      .isShow$
      .pipe(takeUntil(this.destroyedSubject))
      .subscribe(isShow => {
        this.isShow = isShow;
      });
  }

  prevTrack() {
    this.ps.prevTrack();
  }

  playPause(): void {
    if (this.audio.paused === false) {
      this.audio.pause();
      this.isPlaying = false;

    } else {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  nextTrack() {
    this.ps.nextTrack();
  }

  getPercentageProgress(): number {
    return (100 / (this.audio.duration / this.audio.currentTime)) || 0;
  }

  private cleanupAudio() {
    if (!this.audio) {
      return;
    }

    this.isPlaying = false;
    this.audio.pause();
    this.audio.src = '';
    this.audio = null;
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();

    this.cleanupAudio();
  }

}
