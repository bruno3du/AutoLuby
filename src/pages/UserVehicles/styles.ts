import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background-color: #f9f9f9;
  padding-bottom: 2rem;
`;

export const HeaderSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0rem;
  flex-wrap: wrap;
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 0.937rem;
  }
`;

interface StatusProps {
  color?: string;
}
export const Status = styled.div<StatusProps>`
  width: 100%;
  border-radius: 3px;
  text-align: center;
  padding: 3px;
  color: ${(props) => props.color === "VENDIDO" && "#F54A48"};
  color: ${(props) => props.color === "RESERVADO" && "#FAC12F"};
  color: ${(props) => props.color === "DISPONIVEL" && "#34C38F"};
  background: ${(props) =>
    props.color === "VENDIDO" && "rgba(245, 74, 72, 0.2);"};

  background: ${(props) => props.color === "RESERVADO" && "#FAC12F33"};

  background: ${(props) => props.color === "DISPONIVEL" && "#34C38F33"};
`;
