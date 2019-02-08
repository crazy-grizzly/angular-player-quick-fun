import { Track } from './track.interface';

export interface Podcast {
  id: number;
  categoryId: number;
  logo: string;
  name: string;
  description: string;
  tracks: Track[];
}
