import type { Endpoints } from '@octokit/types/dist-types/generated/Endpoints';
import type { ColumnDef } from '@tanstack/react-table';
import { LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

export type GitHubResponseData =
  Endpoints['GET /users/{username}/repos']['response']['data'];

// TODO: finish this
export const gitTableColumns: ColumnDef<GitHubResponseData>[] = [
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
  {
    accessorKey: 'html_url', // TODO: look over data-table-view-options using this not header
    header: 'Link',
    cell: (properties) => {
      const value = properties.getValue();
      if (typeof value !== 'string') return;
      return (
        <Button variant="secondary" size="icon" className="ml-auto" asChild>
          <Link to={value} target="_blank">
            <LinkIcon></LinkIcon>
          </Link>
        </Button>
      );
    },
  },
];
