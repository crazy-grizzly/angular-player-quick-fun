import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { SearchService } from '../../../../core/services/search.service';
import { PodcastCategory } from '../../../../interfaces/podcast-category.interface';
import { PodcastCategoriesService } from '../../../../core/http/podcast-categories.service';

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
    private pcs: PodcastCategoriesService
  ) {

  }

  ngOnInit() {
    this.ss
      .query$
      .pipe(
        takeUntil(this.destroyedSubject)
      )
      .subscribe(query => {
        console.log('dashboard: query change', query);

        this.getData();
      });

    this.getData();
  }

  getData(): void {
    this.isLoading = true;

    this.pcs
      .getList()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
