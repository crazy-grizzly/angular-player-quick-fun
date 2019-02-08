import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Podcast } from '../../../../interfaces/podcast.interface';
import { PodcastsService } from '../../../../core/http/podcasts.service';

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
    private ps: PodcastsService
  ) {

  }

  ngOnInit() {
    this.ar
      .params
      .pipe(takeUntil(this.destroyedSubject))
      .subscribe(params => {
        console.log('params', params);

        this.ps
          .getById(parseInt(params.id, 10))
          .pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
          .subscribe(podcast => {
            this.podcast = podcast;
          });
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
