import styled from "styled-components";

interface ContainerProps {
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  input {
    width: ${({ width }) => (width ? width : "100%")};
    padding: 0.562rem 0.937rem;
    background: #f9f9f9;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    outline: none;
    font-family: "Poppins", sans-sarif;
    box-shadow: 0px 2px 1.562rem rgba(169, 169, 169, 0.2);

    &::placeholder {
      color: #a2a2a2;
    }
  }

  button {
    position: absolute;
    top: 25%;
    right: 0.75rem;
  }
`;
