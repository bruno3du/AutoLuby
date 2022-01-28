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
