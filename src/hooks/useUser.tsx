import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const {
    auth,
    setAuth,
    user,
    setUser,
    storage,
    setStorage,
    companyDatas,
    setCompanyDatas,
    handleLogOut,
    loading,
  } = useContext(UserContext);

  return {
    loading,
    handleLogOut,
    auth,
    setAuth,
    user,
    setUser,
    storage,
    setStorage,
    companyDatas,
    setCompanyDatas,
  };
}
