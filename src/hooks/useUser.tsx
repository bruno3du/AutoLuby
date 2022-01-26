import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const { user, setUser, storage, setStorage, companyDatas, setCompanyDatas } =
    useContext(UserContext);

  return { user, setUser, storage, setStorage, companyDatas, setCompanyDatas };
}
