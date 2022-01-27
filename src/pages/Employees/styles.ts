import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background-color: #F9F9F9;
`;

export const HeaderSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 15px;
  }
`;
