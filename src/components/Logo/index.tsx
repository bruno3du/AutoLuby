import styled from "styled-components";
import logoImg from "../../assets/images/logo-symbol.svg";

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  span {
    margin-left: 20px;
    font-size: 36px;
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
