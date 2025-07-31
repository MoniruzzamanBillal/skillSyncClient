"use client";

import { Button } from "@/components/ui/button";
import { JobApplicationStatusConst } from "@/utils/Constants";
import { TJobApplication } from "@/utils/global.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const ApplicationColumn: ColumnDef<TJobApplication>[] = [
  {
    accessorKey: "jobTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          jobTitle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jobType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          jobType
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jobLocation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          jobLocation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jobLink",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          jobLink
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      const normalizedStatus = status.toLowerCase();

      const statusColor =
        normalizedStatus === JobApplicationStatusConst.Rejected
          ? "text-red-600"
          : normalizedStatus === JobApplicationStatusConst.Offered
          ? "text-green-600"
          : normalizedStatus === JobApplicationStatusConst.Interviewing
          ? "text-blue-600"
          : normalizedStatus === JobApplicationStatusConst.Accepted
          ? "text-gray-600"
          : normalizedStatus === JobApplicationStatusConst.Applied
          ? "text-yellow-600"
          : "text-black";

      return <span className={`font-medium ${statusColor}`}>{status}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          createdAt
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="  w-full "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          deadline
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
