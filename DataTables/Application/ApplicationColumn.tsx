"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JobApplicationStatusConst } from "@/utils/Constants";
import { TJobApplication } from "@/utils/global.types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

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
    cell: ({ row }) => {
      const link: string = row.getValue("jobLink");

      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Job Link
        </a>
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
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const rowData = row.original;

      // console.log(rowData);

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={`/dashboard/applications/12345asdf`}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/dashboard/applications/updateApplication/123`}>
                Update Application
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
