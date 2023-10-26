import type { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Button } from '../ui/button';
import { DataTableFacetedFilter } from '../ui/data-table-faceted-filter';
import { DataTableViewOptions } from '../ui/data-table-view-options';
import { Input } from '../ui/input';

import type { FacetFilterOptions } from '@type/my-types';

export interface DataTableToolbarProperties<TData> {
  table: Table<TData>;
  filterColumn: string;
  facetFilterColumns?: Partial<Record<keyof TData, FacetFilterOptions[]>>;
}

export function GitDataTableToolbar<TData>({
  table,
  filterColumn,
  facetFilterColumns,
}: DataTableToolbarProperties<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  // TODO: translate
  // TODO: this should be easy to turn into a generic toolbar
  //       All that is needed is column key and options for DataTableFacetedFilter

  const inputFilterColumn = table.getColumn(filterColumn);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter repositories..."
          value={(inputFilterColumn?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            inputFilterColumn?.setFilterValue(event.target.value)
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
        {facetFilterColumns &&
          Object.entries<(typeof facetFilterColumns)[keyof TData]>(
            facetFilterColumns,
          ).map(([key, value], index) => {
            const tableColumn = table.getColumn(key);
            if (!tableColumn) return;

            return (
              <DataTableFacetedFilter
                key={index}
                column={tableColumn}
                title={key}
                options={value!}
              />
            );
          })}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
