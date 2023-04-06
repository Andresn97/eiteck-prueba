
import { configureStore } from '@reduxjs/toolkit';

import { characterSlice, locationSlice, paginationSlice } from './slices/character';


export const store = configureStore({
  reducer: {
    character: characterSlice.reducer,
    pagination: paginationSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch