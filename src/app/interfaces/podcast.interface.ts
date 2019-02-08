import { Track } from './track.interface';

export interface Podcast {
  id: number;
  logo: string;
  name: string;
  description: string;
  tracks: Track[];
}
