import { Track } from '../interfaces/track.interface';

export const TRACKS_FIXTURE = [
  {
    id: '1',
    name: 'Track 1',
    duration: '2:24',
    podcastId: '1',
    url: '/assets/tracks/sample.mp3'
  },
  {
    id: '2',
    name: 'Track 2',
    duration: '3:37',
    podcastId: '1',
    url: '/assets/tracks/sample_1.mp3'
  },
] as Track[];
