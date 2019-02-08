import { Podcast } from './podcast.interface';

export interface PodcastCategory {
  name: string;
  podcasts: Podcast[];
}
