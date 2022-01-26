import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactElement;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  // const auth = useAuth();
  const auth = true;
  return auth ? children : <Navigate to="/" />;
}
