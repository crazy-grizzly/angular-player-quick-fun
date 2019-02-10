import { Podcast } from './podcast.interface';

export interface PodcastCategory {
  id: string;
  name: string;
  podcasts: Podcast[];
}
