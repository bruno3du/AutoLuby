import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: var(--color-white);
  padding: 10px 0;
  box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
  padding: 1rem 1.825rem;
  gap: 0.825rem;

  nav {
    > button {
      color: var(--color-white);
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background: var(--color-red);
      font-weight: 600;
      font-size; 14px;
      border-radius: 3px;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }
`;
