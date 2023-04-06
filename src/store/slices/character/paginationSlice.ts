import { createSlice } from "@reduxjs/toolkit";

import { Information } from "../../../eiteck/interfaces";


const emptyInformation: Information = {
  count: 0,
  pages: 0,
  next: null,
  prev: null
}

const initialState = {
  pagination: emptyInformation
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    onSetPagination: ( state, { payload } ) => {
      state.pagination = payload
    },
    onClearPagination: ( state ) => {
      state.pagination = emptyInformation
    },
  }
});

export const {
  onSetPagination,
  onClearPagination
} = paginationSlice.actions;