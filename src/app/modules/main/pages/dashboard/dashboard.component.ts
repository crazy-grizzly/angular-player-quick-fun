import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, takeUntil } from 'rxjs/operators';

import { SearchService } from '../../../../core/services/search.service';
import { PodcastCategory } from '../../../../interfaces/podcast-category.interface';
import { PodcastCategoriesService } from '../../../../core/http/podcast-categories.service';
import { PodcastsService } from '../../../../core/http/podcasts.service';
import { Podcast } from '../../../../interfaces/podcast.interface';
import { PodcastsQuery } from '../../../../interfaces/queries/podcasts-query.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  isCategoriesLoading = true;
  isPodcastsLoading = true;

  searchControl = new FormControl();

  categories: PodcastCategory[] = [];
  currentCategory: PodcastCategory;

  podcasts: Podcast[] = [];

  query: string;

  private destroyedSubject = new Subject<void>();

  constructor(
    private ss: SearchService,
    private pcs: PodcastCategoriesService,
    private ps: PodcastsService
  ) {

  }

  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this.destroyedSubject)
      )
      .subscribe(query => {
        this.query = query;

        this.getPodcasts(
          {
            query,
            categoryId: this.currentCategory ? this.currentCategory.id : null
          }
        );
      });

    this.pcs
      .getList()
      .pipe(
        finalize(() => {
          this.isCategoriesLoading = false;
        })
      )
      .subscribe(categories => {
        this.categories = categories;

        this.getPodcasts(
          (
            this.categories
              ? { categoryId: this.categories[0].id }
              : null
          )
        );
      });
  }

  onCategoryTabSelect(category: PodcastCategory): void {
    console.log('category', category);
    this.currentCategory = category;

    this.getPodcasts({ categoryId: category.id });
  }

  private getPodcasts(query: PodcastsQuery): void {
    this.isPodcastsLoading = true;
    this.podcasts = [];

    this.ps
      .getList(query)
      .pipe(
        finalize(() => {
          this.isPodcastsLoading = false;
        })
      )
      .subscribe(podcasts => {
        console.log('podcasts', podcasts);
        this.podcasts = podcasts;
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
