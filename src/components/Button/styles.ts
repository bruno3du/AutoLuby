import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--color-red);
  padding: 0.625rem;
  font-weight: 600;
  color: var(--color-white);
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #df3938;
    padding: 0.53rem;
    border: 1.5px solid #971212;
  }
`;
