import { api } from "../services/api";
import { createContext, ReactNode, useCallback, useState } from "react";
import { useUser } from "../hooks/useUser";

interface TableDataProviderProps {
  children: ReactNode;
}
interface TableDataContextType {
  getEmployeesData: () => Promise<void>;
  tableEmployees: EmployeesTableData;
}

interface EmployeesData {
  name: string;
  email: string;
  cpf: string;
  salary: number;
  bio: string;
}

interface EmployeesTableData {
  perPage: number;
  currentPage: number;
  totalRecords: number;
  employees: EmployeesData[];
}

export const TableDataContext = createContext({} as TableDataContextType);

export default function TableDataProvider({
  children,
}: TableDataProviderProps) {
  const [tableEmployees, setTableEmployees] = useState(
    {} as EmployeesTableData
  );
  const { storage } = useUser();

  

  const getEmployeesData = useCallback(async () => {
    if (!storage) return alert("not work");
    await api
      .get("/employees", {
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
          Authorization: `Bearer ${storage}`,
        },
      })
      .then((res) => setTableEmployees(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [storage]);

  return (
    <TableDataContext.Provider value={{ getEmployeesData, tableEmployees }}>
      {children}
    </TableDataContext.Provider>
  );
}
