import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

interface PrivateRouteProps {
  children: ReactElement;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { auth } = useUser();

  return auth ? children : <Navigate to="/" />;
}
