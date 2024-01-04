import { configureStore } from '@reduxjs/toolkit';
import { Duration } from 'luxon';

import {
  fetchGithubRepositoryData,
  githubDataReducer,
} from './slices/github-data-slice';

import {
  getFromLocaleStorage,
  saveStoreStateToLocaleStorage,
} from '@/lib/local-storage';

export const store = configureStore({
  preloadedState: getFromLocaleStorage('main-store'),
  reducer: {
    githubData: githubDataReducer,
  },
});

// Save store state to localStorage whenever the state changes
store.subscribe(() => {
  const state = store.getState();
  saveStoreStateToLocaleStorage(
    'main-store',
    state,
    Duration.fromObject({ hours: 12 }),
  );
});

if (store.getState().githubData.repositories.length === 0) {
  console.info('Fetching github repository information');
  store.dispatch(fetchGithubRepositoryData());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
