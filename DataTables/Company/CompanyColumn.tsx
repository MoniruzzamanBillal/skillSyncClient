"use client";

import { Button } from "@/components/ui/button";
import { TCompnay } from "@/utils/global.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const CompanyColumn: ColumnDef<TCompnay>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "website",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Website
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "industry",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Industry
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
