import { Component, OnDestroy, OnInit } from '@angular/core';

import { combineLatest, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { SearchService } from '../../../../core/services/search.service';
import { PodcastCategory } from '../../../../interfaces/podcast-category.interface';
import { PodcastCategoriesService } from '../../../../core/http/podcast-categories.service';
import { PodcastsService } from '../../../../core/http/podcasts.service';
import { groupBy } from 'lodash-es';
import { Podcast } from '../../../../interfaces/podcast.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  isLoading = true;

  categories: PodcastCategory[] = [];

  private destroyedSubject = new Subject<void>();

  constructor(
    private ss: SearchService,
    private pcs: PodcastCategoriesService,
    private ps: PodcastsService
  ) {

  }

  ngOnInit() {
    this.ss
      .query$
      .pipe(
        takeUntil(this.destroyedSubject)
      )
      .subscribe(query => {
        this.getData(query);
      });

    this.getData();
  }

  getData(query?: string): void {
    this.isLoading = true;

    combineLatest(
      this.pcs.getList(),
      this.ps.getList()
    )
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(responses => {
        const [categories, podcasts] = responses;
        const podcastGroups = groupBy(podcasts, 'categoryId');

        this.categories = categories.map(c => {
          c.podcasts = podcastGroups[c.id];

          return c;
        });
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
