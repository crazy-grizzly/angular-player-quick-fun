import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'imageShowAnimation',
      [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('300ms', style({ opacity: 1 }))
          ]
        )
      ]
    )
  ],
})
export class ImageComponent implements OnInit {

  isLoaded: boolean;

  @Input() src: string;

  constructor(
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    if (!this.src) {
      this.isLoaded = true;

      return;
    }

    const img = new Image();

    img.onload = () => {
      this.isLoaded = true;
      this.cdr.markForCheck();
    };

    img.src = this.src;
  }

}
