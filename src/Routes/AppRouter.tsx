import Login from "../pages/Login";
import HomeBoard from "../pages/HomeBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Employees from "../pages/Employees";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomeBoard />
            </PrivateRoute>
          }
        />
        <Route
          path="/lista-de-funcionarios"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
