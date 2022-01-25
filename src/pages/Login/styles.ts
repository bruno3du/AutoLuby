import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  section {
    flex: 1;
  }

  aside {
    flex: 1;
    overflow: hidden;

    img {
      width: 100%;
      transform: translateY(-10%);
    }
  }
`;
