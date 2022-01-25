import imgCar from "../../assets/images/autoluby-carro.png";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <section>Hello World</section>
      <aside>
        <img src={imgCar} alt="autoluby-carro" />
      </aside>
    </Container>
  );
}
