import { Link } from "react-router-dom";
import imgCar from "../../assets/images/autoluby-carro.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <section>
        <div>
          <Logo />
        </div>
        <div className="sessionForm">
          <h1>Bem-vindo à AutoLuby</h1>
          <p>Faça o login para acessar sua conta.</p>
          <form>
            <div className="sessionInput">
              <label htmlFor="email">Endereço de email</label>
              <Input id="email" type="text" placeholder="@mail.com" />
            </div>
            <div className="sessionInput">
              <label htmlFor="passwordInput">Senha</label>
              <Input id="passwordInput" type="text" placeholder="senha" />
            </div>
            <div className="sessionPassword">
              <div>
                <input
                  type="checkbox"
                  id="rememberPaassword"
                  name="rememberPaassword"
                />
                <label htmlFor="rememberPaassword">Lembrar minha senha</label>
              </div>
              <Link to="#">
                <span>Esqueceu a senha?</span>
              </Link>
            </div>
            <Button>Entrar</Button>
          </form>
          <div>
            Ainda não tem uma conta? <Link to="/"><span>Criar Conta</span></Link>
          </div>
        </div>
      </section>
      <aside>
        <img src={imgCar} alt="autoluby-carro" />
      </aside>
    </Container>
  );
}
