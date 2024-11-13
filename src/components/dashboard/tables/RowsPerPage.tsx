import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";

interface RowsPerPageProps<TData> {
  table: Table<TData>;
  showLabel?: boolean;
}

const RowsPerPage = <TData,>({ table, showLabel }: RowsPerPageProps<TData>) => {
  const pageSizes = [10, 20, 30, 40, 50, 100];
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">{showLabel && "Rows:"}</p>
      <Select
        name="size"
        defaultValue="10"
        onValueChange={(v) => table.setPageSize(Number(v))}
      >
        <SelectTrigger className="w-[70px] bg-surface-primary">
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent className="min-w-fit">
          {pageSizes.map((size) => (
            <SelectItem value={size.toString()} className="w-fit m-auto">
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RowsPerPage;
