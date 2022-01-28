import { useEffect, useState } from "react";
import Logo from "../Logo";
import Search from "../Search/Index";
import { Container } from "./styles";
import logoutImg from "../../assets/images/log-out.svg";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        {showSearch && <Search />}
        <nav>
          <button onClick={handleLogOut}>
            Sair
            <img src={logoutImg} alt="logout" />
          </button>
        </nav>
      </div>
    </Container>
  );
}
