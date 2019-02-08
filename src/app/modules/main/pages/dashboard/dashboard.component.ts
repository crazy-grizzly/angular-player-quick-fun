import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private destroyedSubject = new Subject<void>();

  constructor(
    private ss: SearchService
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
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
