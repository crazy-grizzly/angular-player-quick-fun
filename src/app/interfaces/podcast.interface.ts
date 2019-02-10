import { Track } from './track.interface';

export interface Podcast {
  id: string;
  categoryId: string;
  logo: string;
  name: string;
  description: string;
  tracks: Track[];
}
