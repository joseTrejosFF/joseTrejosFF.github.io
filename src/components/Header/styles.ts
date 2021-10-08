import styled from "styled-components";
import { LinkRowContainer } from "components/GlobalStyles";

export const NavbarContainer = styled(LinkRowContainer)`
  /* height: 10vh; */
  height: 90px;

  i {
    font-size: 1.5rem;
  }

  .nav-item {
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavbarContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: contents;
    position: absolute;
    left: 0;
    top: 0;

    Button {
      color: ${({ theme }) => theme.primary_text_color};
      position: fixed;
      right: 0;
      top: 0;
      padding: 0.5rem;
      display: block;
      z-index: 99;
    }

    .options {
      position: fixed;
      right: 0rem;
      top: 0rem;
      height: 100vh;
      z-index: 90;
    }

    .option {
      background-color: ${({ theme }) => theme.secondary_bg_color} !important;
      padding: 0.5rem;
      width: 100vw;
      text-align: center;
      display: block;
    }
  }
`;
