"use client";

import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import EmployeeAction from "./EmployeeAction";

export type Employee = {
  id: string;
  name: string;
  department: string;
  contact: {
    phone: string;
    email: string;
  };
  requests: number;
  hireDate: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <MobileIcon className="opacity-50" />
          <p>{row.original.contact.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeClosedIcon className="opacity-50" />
          <p className="opacity-70">{row.original.contact.email}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "requests",
    header: () => <div className="text-center">Requests</div>,
    cell: ({ row }) => {
      const requests = row.original.requests;
      if (requests) {
        return (
          <div className="text-center">
            <span className="bg-green-600 p-1 rounded-sm text-white">
              {requests}
            </span>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <EmployeeAction />
        </div>
      );
    },
  },
];
