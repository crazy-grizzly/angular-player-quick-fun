import { Component, Input} from '@angular/core';

import { Podcast } from '../../../../interfaces/podcast.interface';

@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.scss']
})
export class PodcastsListComponent {

  @Input() isLoading: boolean;
  @Input() podcasts: Podcast[];

}
