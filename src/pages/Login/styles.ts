import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;

  section {
    flex: 1;

    > div:first-child {
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
    }

    .sessionForm {
      width: 60%;
      margin: 0 auto;
      margin-top: 50px;

      h1 {
        font-size: 34px;
        font-weight: 600;
        color: var(--color-black);
      }

      p {
        font-size: 12px;
        color: var(--color-gray);
      }

      form {
        margin-top: 60px;
        display: flex;
        flex-direction: column;

        label {
          font-size: 14px;
          font-weight: 600;
          color: #7c7c7c;
          margin-bottom: 6px;
        }

        .sessionInput {
          margin-bottom: 30px;
        }

        .sessionPassword {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          margin-bottom: 40px;
          color: var(--color-red);
          font-size: 14px;

          > div {
            display: flex;
            justify-content: center;

            input[type="checkbox"] {
              all: unset;
              cursor: pointer;
              background-color: var(--color-red);
              border-radius: 3px;

              height: 20px;
              width: 20px;
              display: inline-block;

              &:checked {
                background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6666 1.5L4.24998 7.91667L1.33331 5' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
                background-position: center;
                background-repeat: no-repeat;
              }
            }

            label {
              color: var(--color-red);
              margin-left: 10px;
            }
          }
        }
      }

      > div {
        margin-top: 40px;
        font-size: 14px;
        font-weight: 500;
        color: var(--color-gray);
        span {
          color: var(--color-red);
        }
      }
    }
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
