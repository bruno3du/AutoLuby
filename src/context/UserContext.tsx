import { createContext, ReactNode, useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { api } from "../services/api";

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
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  handleLogOut: () => Promise<void>;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: userProviderProps) {
  const [storage, setStorage] = useLocalStorage("@AutoLuby:Token", "");
  const [user, setUser] = useLocalStorage("@AutoLuby:User", {} as UserType);
  const [companyDatas, setCompanyDatas] = useLocalStorage(
    "@AutoLuby:DataCompany",
    {} as companyDatasType
  );
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
 

  async function isLogged() {
    await api
      .get("/employees", {
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
          Authorization: `Bearer ${storage}`,
        },
      })
      .then((res) => setAuth(true))
      .catch(() => setAuth(false))
      .finally(() => setLoading(false));
  }

  async function handleLogOut() {
    setStorage("");
    setUser({} as UserType);
    setCompanyDatas({} as companyDatasType);
    setAuth(false);
 
  }
  useEffect(() => {
    isLogged();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <UserContext.Provider
      value={{
        handleLogOut,
        loading,
        auth,
        setAuth,
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
