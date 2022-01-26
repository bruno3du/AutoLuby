import { useEffect, useState } from "react";
import Logo from "../Logo";
import Search from "../Search/Index";
import { Container } from "./styles";
import logoutImg from "../../assets/images/log-out.svg";

interface HeaderProps {
  withSearch?: boolean;
}

export default function Header({ withSearch = false }: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setShowSearch(withSearch);
  }, [withSearch]);


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
