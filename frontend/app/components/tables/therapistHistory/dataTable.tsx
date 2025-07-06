import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const handleBreakpointChange1280 = (e: MediaQueryListEvent) => {
    if (e.matches) {
      table.getColumn("phone")?.toggleVisibility(true);
      table.getColumn("email")?.toggleVisibility(true);
    } else {
      table.getColumn("phone")?.toggleVisibility(false);
      table.getColumn("email")?.toggleVisibility(false);
    }
  };

  useEffect(() => {
    const mdBreakpoint1280 = window.matchMedia("(min-width: 1280px)");
    mdBreakpoint1280.addEventListener("change", handleBreakpointChange1280);
    handleBreakpointChange1280(
      mdBreakpoint1280 as unknown as MediaQueryListEvent
    );

    return () => {
      mdBreakpoint1280.removeEventListener(
        "change",
        handleBreakpointChange1280
      );
    };
  }, []);

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Keine Ergebnisse gefunden.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-between space-x-2 w-full max-w-2xl md:w-2xl px-6 mt-8">
          <Button
            variant="secondary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`${table.getCanPreviousPage() ? "!opacity-100" : "!opacity-0 !cursor-default"}`}
          >
            <ChevronLeft className="!h-4 !w-4" /> Zurück
          </Button>
          <Button
            variant="secondary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`${table.getCanNextPage() ? "!opacity-100" : "!opacity-0 !cursor-default"}`}
          >
            Weiter <ChevronRight className="!h-4 !w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
