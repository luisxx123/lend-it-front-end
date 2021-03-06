import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 4.5rem;
  background-color: #095194;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .menu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .app-intro {
      display: inherit;
      justify-content: space-between;
      align-items: inherit;
      margin-left: 4.5rem;

      .logo-img {
        width: auto;
        height: 4rem;
      }

      .app-name {
        height: 4rem;
        font-size: 2rem;
        color: #fff;
        margin-left: 1rem;
      }
    }

    .nav {
      width: 100%;

      ul {
        color: #fff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;

        li {
          margin-right: 6rem;
          font-size: 16px;

          a {
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }
  @media (min-width: 375px) {
    #menu-container {
      box-shadow: 0;
    }
  }
`;
