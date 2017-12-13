import {Post} from './post';

export const POSTS: Post[] = [
  new Post(1, 1, 'User1, Thread1, HAHAHAH'),
  new Post(2, 1, 'User2, Thread1, What\'s so funny?'),
  new Post(3, 1, 'User3, Thread1, You didn\'t hear?'),
  new Post(4, 1, 'User4, Thread1, Oh, about Bob?'),
  new Post(5, 1, 'User5, Thread1, What about Bob?'),
  new Post(1, 1, 'User1, Thread1, Once you hear it you\'ll never think about Bob the same way again'),
  new Post(2, 1, 'User2, Thread1, You guys suck'),
  new Post(1, 2, 'User1, Thread2, Who\'s saying these things?'),
  new Post(4, 2, 'User4, Thread2, You don\'t know already?'),
  new Post(1, 2, 'User1, Thread2, I just wanted to hear you say it...')
];
