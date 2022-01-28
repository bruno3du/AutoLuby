import { api } from "../services/api";
import { createContext, ReactNode, useCallback, useState } from "react";
import { useUser } from "../hooks/useUser";

interface TableDataProviderProps {
  children: ReactNode;
}
interface TableDataContextType {
  getEmployeesData: () => Promise<void>;
  tableEmployees: EmployeesTableData;
  getVehiclesData: () => Promise<void>;
  allVehicles: VehiclesTableDatas;
  modelValue: string;
  setModelValue: React.Dispatch<React.SetStateAction<string>>
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

interface VehiclesType {
  brand: string;
  chassi: string;
  color: string;
  km: number;
  model: string;
  status: string;
  value: number;
  yer: string;
}

interface VehiclesTableDatas {
  currentPage: number;
  perPage: number;
  totalRecords: number;
  vehicles: VehiclesType[];
}

export const TableDataContext = createContext({} as TableDataContextType);

export default function TableDataProvider({
  children,
}: TableDataProviderProps) {
  const [tableEmployees, setTableEmployees] = useState(
    {} as EmployeesTableData
  );
  const [allVehicles, setAllVehicles] = useState({} as VehiclesTableDatas);

  const { storage } = useUser();
  const [modelValue, setModelValue] = useState('')

  const getVehiclesData = useCallback(
    async () => {
      await api
        .get(`/vehicles?model=${modelValue}`, {
          headers: {
            Accept: "application/json",
            ContentType: "application/json",
            Authorization: `Bearer ${storage}`,
          },
        })
        .then((res) => setAllVehicles(res.data))
        .catch((err) => {
          console.log(err);
        });
    },
    [storage, modelValue]
  );

  const getEmployeesData = useCallback(async () => {
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
    <TableDataContext.Provider
      value={{
        getEmployeesData,
        tableEmployees,
        getVehiclesData,
        allVehicles,
        modelValue,
        setModelValue
      }}
    >
      {children}
    </TableDataContext.Provider>
  );
}
