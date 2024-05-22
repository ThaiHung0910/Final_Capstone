import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  itemsPerPage: 12,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    }
  },
});

export const { setCurrentPage, setTotalPages, } = paginationSlice.actions;

export default paginationSlice.reducer;
