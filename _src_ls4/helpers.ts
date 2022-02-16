import { Genre } from './types.js';

export function getGenreName(genre: Genre) {
  const genreMapping = {
    [Genre.Adventure]: 'adventure',
    [Genre.Fantasy]: 'fantasy',
    [Genre.Horror]: 'horror',
    [Genre.Thriller]: 'thriller'

  };
  return genreMapping[genre]
}
