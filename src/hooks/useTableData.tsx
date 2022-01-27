import { useContext } from "react";
import { TableDataContext } from "../context/TableDataContext";

export function useTableData() {
  const { tableEmployees, getEmployeesData } = useContext(TableDataContext);

  return { tableEmployees, getEmployeesData };
}
