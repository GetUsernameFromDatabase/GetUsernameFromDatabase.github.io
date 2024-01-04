import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { personalInfo } from '@/data/personal';
import { useOctokit } from '@/hooks/use-octokit';
import type { TGitHubReposResponseData } from '@type/external-api-responses';

type TStatus = 'uninitiated' | 'loading' | 'succeeded' | 'failed';
type TState = {
  repositories: TGitHubReposResponseData;
  statuses: {
    /** If this is `"failed"` then stored data from github-repos.json is used.
     * No check is done if getting data from stored json is successful*/
    repositoryFetch: TStatus;
  };
};
export const fetchGithubRepositoryData = createAsyncThunk(
  'github-data/fetchData',
  async () => {
    const octokit = useOctokit();
    const request = await octokit.request('GET /users/{username}/repos', {
      username: personalInfo.names.github,
    });
    return request.data as TGitHubReposResponseData;
  },
);

const initialState: TState = {
  repositories: [],
  statuses: {
    repositoryFetch: 'uninitiated',
  },
};
const slice = createSlice({
  name: 'github-data',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubRepositoryData.pending, (state) => {
        state.statuses.repositoryFetch = 'loading';
      })
      .addCase(fetchGithubRepositoryData.fulfilled, (state, action) => {
        state.statuses.repositoryFetch = 'succeeded';
        state.repositories = action.payload;
      })
      .addCase(fetchGithubRepositoryData.rejected, (state, action) => {
        state.statuses.repositoryFetch = 'failed';
        console.error(
          'Failed to fetch github repository data:',
          action.error.message,
        );
      });
  },
});

// export const { replaceState: replaceGithubDataState } = slice.actions;
export const githubDataReducer = slice.reducer;
