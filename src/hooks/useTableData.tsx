import { useContext } from "react";
import { TableDataContext } from "../context/TableDataContext";

export function useTableData() {
  const { tableEmployees, getEmployeesData, getVehiclesData, allVehicles } =
    useContext(TableDataContext);

  return { tableEmployees, getEmployeesData, getVehiclesData, allVehicles };
}
