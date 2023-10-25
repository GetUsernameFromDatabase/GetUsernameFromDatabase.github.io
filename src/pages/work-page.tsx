import { DateTime } from 'luxon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import PageWrapper from '@/components/page/page-wrapper';
import { DataTable } from '@/components/ui/data-table';
import { GitDataTableToolbar } from '@/components/work/git-data-table-toolbar';
import GithubCard from '@/components/work/github-card';
// import { useOctokit } from '@/hooks/use-octokit';
import {
  type GitHubResponseData,
  gitTableColumns,
} from '@/data/git-table-columns';
import storedGitHubRepoState from '@/data/github-repos.json';
// import { personalInfo } from '@/info/personal';
import { capitalizeWords } from '@/utils/string-manipulation';

const Work = () => {
  const { t } = useTranslation();
  // const octokit = useOctokit();

  const [repoData] = useState<GitHubResponseData>(storedGitHubRepoState);

  // TODO: also add gitlab https://gitlab.com/api/v4/users/GetUsernameFromDatabase/projects
  // TODO: unify github and gitlab, add filtering/sorting

  // TODO: make sure this gets requested as rarely as possible -- possibly use a store (find pinia, https://redux.js.org/ ???)
  // useEffect(() => {
  //   async function fetchMyRepos() {
  //     const request = await octokit.request('GET /users/{username}/repos', {
  //       username: personalInfo.names.github,
  //     });
  //     console.log(request.data);
  //     setRepoData(request.data);
  //   }
  //   fetchMyRepos();
  // });
  return (
    <PageWrapper title={capitalizeWords(t('work-page.title'))}>
      <DataTable
        columns={gitTableColumns}
        data={repoData}
        toolbar={(table) =>
          GitDataTableToolbar({ table, filterColumn: 'name' })
        }
      ></DataTable>
      <div className="space-y-4">
        {repoData?.map((value, index) => (
          <GithubCard
            key={index}
            title={value.name}
            link={value.html_url}
            description={value.description}
            mainLanguage={value.language}
            starCount={value.stargazers_count}
            updated_at={
              value.updated_at ? DateTime.fromISO(value.updated_at) : null
            }
          ></GithubCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Work;
