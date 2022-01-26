import { useEffect, useState } from "react";
import Logo from "../Logo";
import Search from "../Search/Index";
import { Container } from "./styles";
import logoutImg from "../../assets/images/log-out.svg";
import { useUser } from "../../hooks/useUser";

interface HeaderProps {
  withSearch?: boolean;
}

export default function Header({ withSearch = false }: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);
  const { handleLogOut } = useUser();

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
        <button onClick={handleLogOut}>
          Sair
          <img src={logoutImg} alt="logout" />
        </button>
      </nav>
    </Container>
  );
}
