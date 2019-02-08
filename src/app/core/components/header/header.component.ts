import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchControl = new FormControl();

  private destroyedSubject = new Subject<void>();

  constructor(
    private ss: SearchService
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
        this.ss.query = query;
      });
  }

  ngOnDestroy(): void {
    this.destroyedSubject.next();
    this.destroyedSubject.complete();
  }

}
