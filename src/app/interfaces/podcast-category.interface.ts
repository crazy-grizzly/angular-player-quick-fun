import { Podcast } from './podcast.interface';

export interface PodcastCategory {
  id: number;
  name: string;
  podcasts: Podcast[];
}
