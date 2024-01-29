import {RootState} from '@types';
import {createSelector} from 'reselect';

const selectMovieState = (state: RootState) => state.movie;

export const selectMovieData = createSelector(
  [selectMovieState],
  movieState => movieState.categories,
);

export const selectMoviesByCategory = (categoryName: string) =>
  createSelector([selectMovieData], movies => {
    const foundedMovie = movies.find(category => category.id === categoryName);

    return foundedMovie?.movies ?? [];
  });
