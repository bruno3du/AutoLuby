import Header from "../../components/Header";
import MenuCard from "../../components/MenuCard";
import { Container } from "./styles";

import reservedCar from "../../assets/images/reserved-car.svg";
import vehiclesList from "../../assets/images/vehiclesList.svg";
import employeesList from "../../assets/images/employeesList.svg";

export default function HomeBoard() {
  return (
    <Container>
      <Header withSearch />
      <section>
        <h1>Bem-vindo, Carlos</h1>
        <p>Menu</p>
        <div>
          <MenuCard
            title="Veículos reservados e vendidos "
            description="Veículos reservados e vendidos por você"
            image={reservedCar}
            info="147 Veículos"
          />
          <MenuCard
            title="Listagem geral de veículos"
            description="Listagem de veículos de toda a empresa"
            image={vehiclesList}
            info="180 Veículos"
          />
          <MenuCard
            title="Funcionários da empresa"
            description="Listagem de todos os funcionários da empresa"
            image={employeesList}
            info="147 funcionários"
          />
        </div>
      </section>
    </Container>
  );
}
