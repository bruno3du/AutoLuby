import Header from "../../components/Header";
import MenuCard from "../../components/MenuCard";
import { Container } from "./styles";

import reservedCar from "../../assets/images/reserved-car.svg";
import vehiclesList from "../../assets/images/vehiclesList.svg";
import employeesList from "../../assets/images/employeesList.svg";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeBoard() {
  const { user, companyDatas } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
  });

  return (
    <Container>
      <Header withSearch />
      <section>
        <h1>Bem-vindo, {user.name}</h1>
        <p>Menu</p>
        <div>
          <MenuCard
            title="Veículos reservados e vendidos"
            description="Veículos reservados e vendidos por você"
            image={reservedCar}
            info={companyDatas.totalVehiclesLoggedUser + " VEÍCULOS"}
            link='/seus-veiculos'
          />
          <MenuCard
            title="Listagem geral de veículos"
            description="Listagem de veículos de toda a empresa"
            image={vehiclesList}
            info={companyDatas.totalVehicles + " VEÍCULOS"}
            link='/todos-veiculos'
          />
          <MenuCard
            title="Funcionários da empresa"
            description="Listagem de todos os funcionários da empresa"
            image={employeesList}
            info={companyDatas.totalEmployees + " FUNCIONÁRIOS"}
            link='/funcionarios'
          />
        </div>
      </section>
    </Container>
  );
}
