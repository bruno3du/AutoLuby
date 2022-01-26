import styled from "styled-components";

export const Container = styled.div`
  height: 12.5rem;
  margin: 0 auto;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;

  display: flex;
  justify-content: space-between;

  > div:first-child {
    padding: 1.875rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      margin-top: 10px;
      color: #858585;
    }

    > div:nth-child(2) {
      color: var(--color-red);
      font-weight: bold;
      align-self: flex-end;
    }
  }

  > div:nth-child(2) {
  }

  & + div {
    margin-top: 20px;
  }

  &:hover {
    transform: scale(1.05, 1.05);
    -moz-transform: scale(1.05, 1.05);
    -webkit-transform: scale(1.05, 1.05)
    box-shadow: 0px 0px 7.18px rgba(162, 162, 162, 0.25);
  }
`;
