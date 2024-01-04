import type { Endpoints } from '@octokit/types/dist-types/generated/Endpoints';

export type TGitHubReposResponseData =
  Endpoints['GET /users/{username}/repos']['response']['data'];
