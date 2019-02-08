import { PodcastCategory } from '../interfaces/podcast-category.interface';
import { Podcast } from '../interfaces/podcast.interface';

export const podcastCategories = [
  {
    name: 'Cat 1',
    podcasts: [
      {
        id: 1,
        name: 'Nature',
        description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
          ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
          'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
          'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
          'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
          'dolore magnam aliquam quaerat voluptatem.',
        logo: '/assets/img/nature.jpg',
        tracks: []
      } as Podcast,
      {
        id: 2,
        name: 'Space',
        description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
          ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
          'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
          'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
          'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
          'dolore magnam aliquam quaerat voluptatem.',
        logo: '/assets/img/space.jpg',
        tracks: []
      } as Podcast,
      {
        id: 3,
        name: 'Cars',
        description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
          ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
          'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
          'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
          'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
          'dolore magnam aliquam quaerat voluptatem.',
        logo: '/assets/img/cars.jpg',
        tracks: []
      } as Podcast
    ]
  },
] as PodcastCategory[];
