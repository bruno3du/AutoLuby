import Login from "../pages/Login";
import HomeBoard from "../pages/HomeBoard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Employees from "../pages/Employees";
import UserVehicles from "../pages/UserVehicles";
import Vehicles from "../pages/Vehicles";

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
          path="/funcionarios"
          element={
            <PrivateRoute>
              <Employees />
            </PrivateRoute>
          }
        />
        <Route
          path="/seus-veiculos"
          element={
            <PrivateRoute>
              <UserVehicles />
            </PrivateRoute>
          }
        />
        <Route
          path="/todos-veiculos"
          element={
            <PrivateRoute>
              <Vehicles />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
