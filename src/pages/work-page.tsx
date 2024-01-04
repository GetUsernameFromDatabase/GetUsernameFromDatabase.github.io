import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import PageWrapper from '@/components/page/page-wrapper';
import { DataTable } from '@/components/ui/data-table';
import { GitDataTableToolbar } from '@/components/work/git-data-table-toolbar';
import GithubCard from '@/components/work/github-card';
import {
  getGitTableColumnsFacetFilterOptions,
  gitTableColumns,
} from '@/data/git-table-columns';
import type { RootState } from '@/store';
import { capitalizeWords } from '@/utils/string-manipulation';

const Work = () => {
  const { t } = useTranslation();
  const githubData = useSelector((state: RootState) => state.githubData);

  // TODO: also add gitlab https://gitlab.com/api/v4/users/GetUsernameFromDatabase/projects
  // TODO: unify github and gitlab, add filtering/sorting

  const facetFilterColumns = getGitTableColumnsFacetFilterOptions(
    githubData.repositories,
  );
  return (
    <PageWrapper title={capitalizeWords(t('work-page.title'))}>
      <DataTable
        columns={gitTableColumns}
        data={githubData.repositories}
        toolbar={(table) =>
          GitDataTableToolbar({
            table,
            filterColumn: 'name',
            facetFilterColumns,
          })
        }
      ></DataTable>
      <div className="space-y-4">
        {githubData.repositories.map((value, index) => (
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
