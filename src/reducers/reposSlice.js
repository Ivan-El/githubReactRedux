import { createSlice } from '@reduxjs/toolkit';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
  },
  reducers: {
    setRepos(state, action) {
      state.items = action.payload.items;
      state.isFetching = false;
      state.totalCount = action.payload.total_count;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPerPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setRepos, setIsFetching, setCurrentPage, setPerPage } =
  reposSlice.actions;
export default reposSlice.reducer;
