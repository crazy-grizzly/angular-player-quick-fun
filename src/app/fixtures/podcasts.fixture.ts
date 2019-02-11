import { Podcast } from '../interfaces/podcast.interface';

export const PODCASTS_FIXTURE: Podcast[] = [
  {
    id: '1',
    categoryId: '1',
    name: 'Nature',
    description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
      ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
      'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
      'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
      'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
      'dolore magnam aliquam quaerat voluptatem.',
    logo: '/assets/img/nature.jpg',
    tracks: []
  },
  {
    id: '2',
    categoryId: '1',
    name: 'Space',
    description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
      ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
      'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
      'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
      'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
      'dolore magnam aliquam quaerat voluptatem.',
    logo: '/assets/img/space.jpg',
    tracks: []
  },
  {
    id: '3',
    categoryId: '1',
    name: 'Cars',
    description: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
      ' totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' +
      'explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur ' +
      'magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia ' +
      'dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et ' +
      'dolore magnam aliquam quaerat voluptatem.',
    logo: '/assets/img/cars.jpg',
    tracks: []
  }
];
