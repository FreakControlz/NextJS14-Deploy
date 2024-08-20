"use client";
import { ColumnDef } from "@tanstack/react-table"

interface data {
  dag: string;
  training: string;
  extra: string;
  weeknummer: number;
}

export const Columns: ColumnDef<data>[] = [
  {
    accessorKey: "dag",
    header: "Dag",
  },
  {
    accessorKey: "training",
    header: "Training",
  },
  {
    accessorKey: "extra",
    header: "Schema",
  },
  {
    accessorKey: "weeknummer",
    header: "Weeknummer"
  }
];