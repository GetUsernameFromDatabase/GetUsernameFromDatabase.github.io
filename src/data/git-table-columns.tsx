import type { Endpoints } from '@octokit/types/dist-types/generated/Endpoints';
import type { ColumnDef } from '@tanstack/react-table';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import type { DataTableToolbarProperties } from '@/components/work/git-data-table-toolbar';

export type GitHubResponseData =
  Endpoints['GET /users/{username}/repos']['response']['data'];

// TODO: finish this
export const gitTableColumns: ColumnDef<GitHubResponseData[0]>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  { accessorKey: 'language', header: 'Language' },
  {
    accessorKey: 'html_url',
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
  },
];

export const getGitTableColumnsFacetFilterOptions = (
  repoData: GitHubResponseData,
) => {
  const facetFilterColumns: DataTableToolbarProperties<
    (typeof repoData)[0]
  >['facetFilterColumns'] = {
    language: [],
  };
  const uniqueFacetFilterColumnValues: Partial<{
    [K in keyof GitHubResponseData[0]]: K extends 'language'
      ? Set<string>
      : GitHubResponseData[0][K][];
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
