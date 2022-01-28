import styled from "styled-components";
import { EnumError } from "../../types/enum";

interface ContainerProps {
  inputValid: EnumError;
}

export const Container = styled.div`
  position: relative;

  > div:nth-child(2) {
    position: absolute;
    top: 25%;
    right: 0.937rem;
  }
`;

export const InputField = styled.input<ContainerProps>`
  width: 100%;
  padding: 0.562rem 0.937rem;
  background: #f9f9f9;
  border: ${({ inputValid }) => inputValid};
  border-radius: 5px;
  outline: none;
  color: var(--color-black);
  font-family: "Poppins", sans-sarif;

  &::placeholder {
    color: #a2a2a2;
  }
`;
