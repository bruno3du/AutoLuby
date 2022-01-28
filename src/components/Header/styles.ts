import styled from "styled-components";



export const Container = styled.header`
background: var(--color-white);
box-shadow: 0px 2px 1.562rem rgba(169, 169, 169, 0.2);
> div {
  max-width: 1180px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-wrap: wrap;
  padding: 0.625rem 0;
  padding: 1rem 1.825rem;
  gap: 0.825rem;
  margin: 0 auto;
  }

  nav {
    > button {
      color: var(--color-white);
      display: flex;
      gap: 0.625rem;
      justify-content: center;
      align-items: center;
      padding: 0.625rem;
      background: var(--color-red);
      font-weight: 600;
      font-size; 0.875rem;
      border-radius: 3px;

      &:hover {
        filter: brightness(0.9)
      }
    }
  }
`;
