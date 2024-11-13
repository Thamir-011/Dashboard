import { columns } from "@/components/dashboard/tables/employees/columns";
import { DataTable } from "@/components/dashboard/tables/employees/DataTable";
import { employees } from "@/data/constants";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto bg-surface-secondary p-2 shadow-md rounded-sm">
      <DataTable columns={columns} data={employees} />
    </div>
  );
};

export default page;
