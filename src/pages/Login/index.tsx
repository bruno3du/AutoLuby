import { Link } from "react-router-dom";
import imgCar from "../../assets/images/autoluby-carro.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container } from "./styles";
import { useFormik } from "formik";
import { Schema } from "../../utils/yup";
import { EnumError } from "../../types/enum";
import { api } from "../../services/api";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Login() {
  const [storage, setStorage] = useLocalStorage("@AutoLuby:Token", "");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    validateOnBlur: true,
    onSubmit: (values) => {
      api
        .post("/login", values)
        .then((res) => setStorage(res.data.token))
        .catch((err) => console.log(err));
    },
  });

  return (
    <Container>
      <section>
        <div>
          <Logo />
        </div>
        <div className="sessionForm">
          <h1>Bem-vindo à AutoLuby</h1>
          <p>Faça o login para acessar sua conta.</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="sessionInput">
              <label htmlFor="email">Endereço de email</label>
              <Input
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                type="email"
                placeholder="@mail.com"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.email
                    ? formik.errors.email
                      ? EnumError.Warning
                      : EnumError.Ok
                    : EnumError.blank
                }
              />
            </div>

            <div className="sessionInput">
              <label htmlFor="password">Senha</label>
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                id="password"
                type="password"
                placeholder="senha"
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password
                    ? formik.errors.password
                      ? EnumError.Warning
                      : EnumError.Ok
                    : EnumError.blank
                }
              />
            </div>
            <div className="sessionPassword">
              <div>
                <input
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
                />
                <label htmlFor="rememberPassword">Lembrar minha senha</label>
              </div>
              <Link to="#">
                <span>Esqueceu a senha?</span>
              </Link>
            </div>
            <Button type="submit">Entrar</Button>
          </form>
          <div>
            Ainda não tem uma conta?
            <Link to="/">
              <span>Criar Conta</span>
            </Link>
          </div>
        </div>
      </section>
      <aside>
        <img src={imgCar} alt="autoluby-carro" />
      </aside>
    </Container>
  );
}
