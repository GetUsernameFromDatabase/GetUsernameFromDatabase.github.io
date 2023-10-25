import type { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { DataTableViewOptions } from '../ui/data-table-view-options';
import { Input } from '../ui/input';

interface DataTableToolbarProperties<TData> {
  table: Table<TData>;
  filterColumn: string;
}

export function GitDataTableToolbar<TData>({
  table,
  filterColumn,
}: DataTableToolbarProperties<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  // TODO: translate

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter repositories..."
          value={
            (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
