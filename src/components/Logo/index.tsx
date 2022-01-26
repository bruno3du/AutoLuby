import styled from "styled-components";
import logoImg from "../../assets/images/logo-symbol.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 1.25rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: var(--color-red);
  }
`;

export default function Logo() {
  return (
    <Container>
      <img src={logoImg} alt="Simbolo da logo Auto Luby" />
      <span>AutoLuby</span>
    </Container>
  );
}
