import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Track } from '../../interfaces/track.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _currentTrack: Track;
  private currentTrackSubject = new Subject<Track>();

  private _queue: Track[] = [];
  private queueSubject = new Subject<Track[]>();

  private _isShow: boolean;
  private isShowSubject = new Subject<boolean>();

  set currentTrack(track: Track) {
    this._currentTrack = track;
    this.currentTrackSubject.next(this._currentTrack);
  }

  get currentTrack(): Track {
    return this._currentTrack;
  }

  get currentTrack$(): Observable<Track> {
    return this.currentTrackSubject.asObservable();
  }

  set queue(tracks: Track[]) {
    this._queue = tracks;
    this.queueSubject.next(this._queue);
  }

  get queue(): Track[] {
    return this._queue;
  }

  get queue$(): Observable<Track[]> {
    return this.queueSubject.asObservable();
  }

  play(): void {
    this.isShow = true;
  }

  pause(): void {
  }

  set isShow(isShow: boolean) {
    this._isShow = isShow;
    this.isShowSubject.next(this._isShow);
  }

  get isShow(): boolean {
    return this._isShow;
  }

  get isShow$(): Observable<boolean> {
    return this.isShowSubject.asObservable();
  }

  prevTrack(): void {
    const currTrackIndex = this.queue.indexOf(this.currentTrack);

    if (currTrackIndex < 0 || !this.queue[currTrackIndex - 1]) {
      return;
    }

    this.currentTrack = this.queue[currTrackIndex - 1];
  }

  nextTrack(): void {
    const currTrackIndex = this.queue.indexOf(this.currentTrack);

    if (currTrackIndex < 0 || !this.queue[currTrackIndex + 1]) {
      return;
    }

    this.currentTrack = this.queue[currTrackIndex + 1];
  }

}


