import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoviesData} from '@types';

const initialMovieState: IMoviesData = {
  categories: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialMovieState,
  reducers: {
    setMovie: (state, action: PayloadAction<IMoviesData>) => {
      return {...state, categories: action.payload.categories};
    },
  },
});

export const {setMovie} = movieSlice.actions;

export default movieSlice.reducer;
