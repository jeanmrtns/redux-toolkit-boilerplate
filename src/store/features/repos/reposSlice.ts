import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { Repo } from '@/types';

interface ReposState {
  repos: Repo[] | undefined;
}

const initialState: ReposState = {
  repos: [],
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetchRepos: (state, action: PayloadAction<Repo[] | undefined>) => {
      state.repos = action.payload;
    },
  },
});

export const { fetchRepos } = reposSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default reposSlice.reducer;
