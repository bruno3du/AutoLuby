import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Poppins", sans-sarif;
  gap: 4px;
  li {
    display: flex;
    align-items: center;

    .btn-prev-next {
      display: flex;
      gap: 10px;
      font-weight: 600;
      color: #858585;
      padding: 5px 10px;
      align-items: center;
      border-radius: 3px;

      &:disabled {
        background: #ededed;
        cursor: default;
      }
    }

    .btn {
      font-weight: 600;
      width: 24px;
      height: 24px;
      border-radius: 3px;
      color: #858585;
    }
    .pagination__item--active {
      background: var(--color-red);
      color: var(--color-white);
    }
  }
`;
