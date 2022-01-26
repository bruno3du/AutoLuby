import { useState } from "react";
import Logo from "../Logo";
import Search from "../Search/Index";
import { Container } from "./styles";
import logoutImg from "../../assets/images/log-out.svg";

export default function Header() {
  const [showSearch, setShowSearch] = useState(true); //TODO
  return (
    <Container>
      <div>
        <Logo />
      </div>
      <div>{showSearch && <Search />}</div>
      <nav>
        <button>
          Sair
          <img src={logoutImg} alt="logout" />
        </button>
      </nav>
    </Container>
  );
}
