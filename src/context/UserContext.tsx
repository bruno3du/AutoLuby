import { createContext, ReactNode, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface userProviderProps {
  children: ReactNode;
}

interface UserType {
  name: string;
  email: string;
  cpf: string;
  salary: number;
  bio: string;
}

interface companyDatasType {
  totalVehiclesLoggedUser: number;
  totalVehicles: number;
  totalEmployees: number;
}

interface UserContextType {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  storage: string;
  setStorage: (value: string | ((val: string) => string)) => void;
  companyDatas: companyDatasType;
  setCompanyDatas: React.Dispatch<React.SetStateAction<companyDatasType>>;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: userProviderProps) {
  const [storage, setStorage] = useLocalStorage("@AutoLuby:Token", "");
  const [user, setUser] = useState({} as UserType);
  const [companyDatas, setCompanyDatas] = useState({} as companyDatasType);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        storage,
        setStorage,
        companyDatas,
        setCompanyDatas,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
