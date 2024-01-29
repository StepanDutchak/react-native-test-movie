// reducer.js

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoviesData} from '@types';

// Define your initial state properly
const initialMovieState: IMoviesData = {
  categories: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialMovieState, // Use the initial state here
  reducers: {
    setMovie: (state, action: PayloadAction<IMoviesData>) => {
      return {...state, categories: action.payload.categories}; // Ensure categories are set correctly
    },
  },
});

export const {setMovie} = movieSlice.actions;

export default movieSlice.reducer;
