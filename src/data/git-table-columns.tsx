import { createColumnHelper } from '@tanstack/react-table';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';
import type { DataTableToolbarProperties } from '@/components/work/git-data-table-toolbar';
import type { TranslationNsKeys } from '@/plugins/i18n';
import type { TGitHubReposResponseData } from '@type/external-api-responses';

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    translationKey: TranslationNsKeys;
  }
}
/** column helper */
const ch = createColumnHelper<TGitHubReposResponseData[0]>();
export const gitTableColumns = [
  ch.accessor('name', {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    meta: { translationKey: 'repo-table.headers.name' },
  }),
  ch.accessor('description', {
    header: 'Description',
    meta: { translationKey: 'repo-table.headers.description' },
  }),
  ch.accessor('language', {
    header: 'Language',
    meta: { translationKey: 'repo-table.headers.language' },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  }),
  ch.accessor('html_url', {
    enableColumnFilter: true,
    header: 'Link',
    meta: { translationKey: 'repo-table.headers.html_url' },
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
