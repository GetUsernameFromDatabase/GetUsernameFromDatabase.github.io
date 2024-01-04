import { createColumnHelper } from '@tanstack/react-table';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import type { DataTableToolbarProperties } from '@/components/work/git-data-table-toolbar';
import type { TGitHubReposResponseData } from '@type/external-api-responses';

/** column helper */
const ch = createColumnHelper<TGitHubReposResponseData[0]>();
export const gitTableColumns = [
  ch.accessor('name', {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  }),
  ch.accessor('description', { header: 'Description' }),
  ch.accessor('language', {
    header: 'Language',
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  }),
  ch.accessor('html_url', {
    enableColumnFilter: true,
    header: 'Link',
    cell: (properties) => {
      const value = properties.getValue();
      if (typeof value !== 'string') return;
      return (
        <Button variant="link" size="icon" asChild>
          <Link to={value} target="_blank">
            <LinkIcon></LinkIcon>
          </Link>
        </Button>
      );
    },
  }),
];

export const getGitTableColumnsFacetFilterOptions = (
  repoData: TGitHubReposResponseData,
) => {
  const facetFilterColumns: DataTableToolbarProperties<
    (typeof repoData)[0]
  >['facetFilterColumns'] = {
    language: [],
  };
  const uniqueFacetFilterColumnValues: Partial<{
    [K in keyof TGitHubReposResponseData[0]]: K extends 'language'
      ? Set<string>
      : TGitHubReposResponseData[0][K][];
  }> = {
    language: new Set<string>(),
  };
  for (const value of repoData) {
    const { language } = value;
    if (language && !uniqueFacetFilterColumnValues.language?.has(language)) {
      uniqueFacetFilterColumnValues.language?.add(language);
      facetFilterColumns.language?.push({ value: language });
    }
  }
  facetFilterColumns.language?.sort((a, b) => a.value.localeCompare(b.value));
  return facetFilterColumns;
};
